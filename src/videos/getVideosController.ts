import {Request, Response} from 'express'
import {db} from '../db/db'
import {OutputVideoType} from '../input-output-types/video-types'

export const getVideoController =  (req: Request, res: Response) => {
    
    const video = db.videos
    if (video) {
        res.status(200).json(db.videos)
    } else {
        res.send(404)
    }

}