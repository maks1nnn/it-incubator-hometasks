import {Request, Response} from 'express'
import {db} from '../db/db'
import {OutputVideoType} from '../input-output-types/video-types'





export const findVideoController =  (req: Request, res: Response<OutputVideoType>) => {
    
    const video = db.videos.find(v => v.id === +req.params.id)
    if (video) {
        res.status(200).json(video)
    } else {
        res.status(404).json()
    }

}