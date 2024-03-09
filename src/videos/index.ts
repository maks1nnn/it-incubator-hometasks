import {Router} from 'express'
import { getVideoController } from './getVideosController'







export const videoRouter = Router()



videoRouter.get('/', getVideoController)