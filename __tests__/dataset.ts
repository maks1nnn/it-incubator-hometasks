

import {DBType} from '../src/db/db'
import { VideoDBType } from '../src/db/video-db-type'

export const video1: any /*VideoDBType*/ = {
    id: Date.now() + Math.random(),
    title: 't' + Date.now() + Math.random(),
}


export const dataset1: DBType = {
    videos: [video1],
}