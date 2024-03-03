import {req} from './test-helpers'

describe('/videos', () => {
    beforeAll(async () => {

    })


afterAll( async () => {

})

it('GET videos = []', async () => {
    const res = await req
         .get('/videos')
         .expect(200)


         console.log(res.body)

         expect(res.body.length).toBe(2)


})

})