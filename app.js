const { response } = require('express');
const express = require ('express')
const https = require('https');
const app = express()

app.get('/', (req, res) => {
   res.send('Server is up and running...')
})

app.listen(3001, () => {console.log("Started running port 3001");})