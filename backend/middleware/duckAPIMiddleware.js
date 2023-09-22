const axios = require('axios')
const asyncHandler = require('express-async-handler')


const getDuckImage = asyncHandler(async(req, res, next) => {
    try {
        await axios.get('https://random-d.uk/api/v2/random')
        .then((response) => {
            req.duckURL = response.data.url
        })

        next()
    } catch (error) {
        console.log(error)
        res.status(401)
        throw new Error('Unable to retrieve duck image')
    }
})

module.exports = { getDuckImage };