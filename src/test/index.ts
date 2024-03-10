import {Router} from 'express'
import { testDeleteAllVideoController } from './testDeleteAllController'

export const testRouter = Router()

testRouter.delete('/all-data', testDeleteAllVideoController)