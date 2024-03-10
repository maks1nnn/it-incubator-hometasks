import {Request, Response} from 'express'
import {db} from '../db/db'
import {OutputVideoType, InputVideoType , Resolutions} from '../input-output-types/video-types'
import { OutputErrorsType } from '../input-output-types/output-errors-types'
import { inputValidation } from './validator/validateInputCreateVideo'
import { VideoDBType } from '../db/video-db-type'






export const createVideoController = (req: Request<any, any, InputVideoType>, res: Response<OutputVideoType | OutputErrorsType>) => {
    const errors = inputValidation(req.body)
    if (errors.errorsMessages.length) {
        res
            .status(400)
            .json(errors)
        return
    }
 
    

    const newVideo: VideoDBType = {
        ...req.body,
        canBeDownloaded:false,
        minAgeRestriction: null,
        createdAt: new Date('2024-03-11T00:00:00.000Z').toISOString(),
        publicationDate: new Date('2024-03-12T00:00:00.000Z').toISOString(),

        id: Date.now() + Math.round(Math.random()),
        // ...
    }
    db.videos = [...db.videos, newVideo]
 
    res
        .status(201)
        .json(newVideo)
}