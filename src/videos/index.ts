import {Router} from 'express'
import { getVideoController } from './getVideosController'
import {createVideoController} from './createVideoController'
import { updateVideoController } from './updateVideoController'
import { deleteVideoController } from './deleteVideoController'
import { findVideoController } from './findVideoController'




export const videoRouter = Router()



videoRouter.get('/', getVideoController)
videoRouter.get('/:id', findVideoController)
videoRouter.post('/', createVideoController)
videoRouter.put('/:id', updateVideoController)
videoRouter.delete('/:id', deleteVideoController)