import {OutputErrorsType} from '../../input-output-types/output-errors-types'
import { InputVideoType,Resolutions } from '../../input-output-types/video-types'


export const inputValidation = (video: InputVideoType) => {
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

   else if (!video.availableResolutions.every(p => Resolutions[p])){
        errors.errorsMessages.push({
            message: 'not find', field: 'availableResolutions'
        })
    }

    
    return errors
}