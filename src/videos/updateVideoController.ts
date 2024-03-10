import {Request, Response} from 'express'
import {db} from '../db/db'
import { OutputErrorsType } from '../input-output-types/output-errors-types'
import {updateVideoType} from '../input-output-types/video-types'
import { inputUpdateValidation } from './validator/validateInputUpdateVideos'






export const updateVideoController = (req: Request<{id:string}, {}, updateVideoType>, res: Response< OutputErrorsType>) => {
    const errors = inputUpdateValidation(req.body)
    if (errors.errorsMessages.length) {
        res
            .status(400)
            .json(errors)
        return
    }

    const id = +req.params.id;
    const video = db.videos.find(v => v.id === id)


    if (video) {
        video.title = req.body.title
        video.author = req.body.author

        if(req.body.availableResolutions){
            video.availableResolutions = req.body.availableResolutions
        }

       if(req.body.canBeDownloaded){
        video.canBeDownloaded = req.body.canBeDownloaded
       }

       if(req.body.minAgeRestriction){
        video.minAgeRestriction = req.body.minAgeRestriction
       }

       if(req.body.publicationDate){
        video.publicationDate = req.body.publicationDate
       }

        res.status(204).json()
    } else {
        res.status(404).json()
    }
}

/*
    "title": "string",
    "author": "string",
    "availableResolutions": [
      "P144"
    ],
    "canBeDownloaded": true,
    "minAgeRestriction": 18,
    "publicationDate": "2024-03-10T18:07:38.055Z"
  }*/