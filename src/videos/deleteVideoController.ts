import {Request, Response} from 'express'
import {db} from '../db/db'
import {OutputVideoType} from '../input-output-types/video-types'






export const deleteVideoController = (req: Request, res: Response) => {
    const id = +req.params.id;
    const newVideos = db.videos.filter(v => v.id !== id)
    if (newVideos.length < db.videos.length) {
        db.videos = newVideos
        res.send(204)
    } else {
        res.send(404)
    }
}