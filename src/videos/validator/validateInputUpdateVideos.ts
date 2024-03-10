import {OutputErrorsType} from '../../input-output-types/output-errors-types'
import { Resolutions, updateVideoType } from '../../input-output-types/video-types'


export const inputUpdateValidation = (video: updateVideoType) => {
    const errors: OutputErrorsType = {
        errorsMessages: []
    }

    if(typeof video.title !== 'string' || !video.title || !video.title.trim() || video.title.length > 40){
        errors.errorsMessages.push({
            message: 'error!!', field: 'title'
        })
    }
    if(typeof video.author !== 'string' || !video.author || !video.author.trim() || video.author.length > 20){
        errors.errorsMessages.push({
            message: 'error!!', field: 'author'
        })
    }
 
    if (!Array.isArray(video.availableResolutions)  
    ) {
        errors.errorsMessages.push({
            message: '! non array', field: 'availableResolutions'
        })
    }

    if (!video.availableResolutions.every(p => Resolutions[p])){
        errors.errorsMessages.push({
            message: 'not find', field: 'availableResolutions'
        })
    }

    if(video.canBeDownloaded){
        if(typeof video.canBeDownloaded !== 'boolean'){
            errors.errorsMessages.push({
                message: 'error!!', field: 'canBeDownloaded'
            })
        }
    }

    if(video.minAgeRestriction){
        const regex = /^(1[0-8]|[1-9])$/
        if (!regex.test(video.minAgeRestriction.toString())){
            errors.errorsMessages.push({
                message: 'error!!', field: 'minAgeRestriction'
            })
        }
    }

    if(video.publicationDate){
        const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/
        if (!regex.test(video.publicationDate)){
            errors.errorsMessages.push({
                message: 'error!!', field: 'publicationDate'
            })
        }
    }



    
    return errors
}