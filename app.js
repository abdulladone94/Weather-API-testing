const { response } = require('express');
const express = require ('express')
const https = require('https');
const app = express()

app.get('/', (req, res) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=colombo&appid=d7ef3ce0eecd0cbc9fc900c9b6417f90'
    https.get(url, (response) => {
        // console.log(response.statusCode);

        response.on('data', (data) => {
            const weather = (JSON.parse(data));
            console.log(weather);
            
        })
    })
})

app.listen(3001, () => {console.log("Started running port 3001");})