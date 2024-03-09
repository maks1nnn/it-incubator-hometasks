import express, { Request, Response } from 'express'
import { createDB } from "./db/db"
import { SETTINGS } from './settings'
import { videoRouter } from './videos'
import { RequestWithBody, RequestWithParams, RequestWithParamsAndBody, RequestWithQuery } from '../types/typesVideo'

import {CreateVideoModel} from "./models/CreateVideoModel"
import { getVideoController } from './videos/getVideosController'
export const app = express()

export const db = createDB()

app.use(express.json())

app.use(SETTINGS.PATH.VIDEOS, videoRouter)

app.get('/', (req, res) => {
    res.status(200).json({ hello: 'world' })
})

const postVideo = (req:RequestWithBody<CreateVideoModel>, res:Response) => {
    let title = req.body.title
    if (!title || typeof title !== 'string' || !title.trim() || title.length > 40){
        res.status(400).send({
            errorsMessages:[{
            "message": "incorrect title",
            "field" : "title"
       }],
       "resultCode": 1 
    })
    return;
    }


    const newVideo = {
        id: +(new Date()),
        title: req.body.title,
        author: 'it-incubator.eu'
    }

    db.videos.push(newVideo)
    res.status(201).send(newVideo)
}

app.post('/videos/', postVideo)



app.get(SETTINGS.PATH.VIDEOS, getVideoController)



export const putVideo = (req: Request, res: Response) => {
    let title = req.body.title
    if (!title || typeof title !== 'string' || !title.trim() || title.length > 40){
        res.status(400).send({
            errorsMessages:[{
            "message": "incorrect title",
            "field" : "title"
       }],
       "resultCode": 1
    })
    return;
    }

    const id = +req.params.videoId;
    const video = db.videos.find(v => v.id === id)
    if (video) {
        video.title = req.body.title
        res.send(204)
    } else {
        res.send(404)
    }
}
app.put('/videos/:videosId', putVideo)




export const deleteVideo = (req: Request, res: Response) => {
    const id = +req.params.videoId;
    const newVideos = db.videos.filter(v => v.id !== id)
    if (newVideos.length < db.videos.length) {
        db.videos = newVideos
        res.send(204)
    } else {
        res.send(404)
    }
}

app.delete('/videos/:videoId', deleteVideo)



