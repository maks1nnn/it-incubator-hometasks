import express from 'express'
import { SETTINGS } from './settings'
import { videoRouter } from './videos'
import { testRouter } from './test'

export const app = express()

app.use(express.json())




app.use(SETTINGS.PATH.VIDEOS, videoRouter)
app.use(SETTINGS.PATH.TEST,testRouter)



