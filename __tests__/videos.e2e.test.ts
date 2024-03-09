import {req} from './test-helpers'
import { SETTINGS } from '../src/settings'
describe('/videos', () => {
    beforeAll(async () => {

    })


afterAll( async () => {

})

it('GET videos = []', async () => {
    const res = await req
         .get(SETTINGS.PATH.VIDEOS)
         .expect(200)


         console.log(res.body)

        //expect(res.body.length).toBe(1)


})

it('POST new video', async () => {
const res = await req
                    .post('/vodeos')
})

})