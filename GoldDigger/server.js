// Importing necessary modules
import http from 'node:http'

// Importing utility functions
import { serveStatic } from './utils/serveStatic.js'
import { parseFORMBody } from './utils/parseFORMBody.js'
 

const __dirname = import.meta.dirname

const PORT = 9999
let currentGoldPrice = 10.00
const server = http.createServer(async (req, res) => {
    // GET route
    if (req.url === '/' && req.method === 'GET') {
        return await serveStatic(req, res, __dirname)
    }
    // POST route
    if (req.url ==='/submit-amount' && req.method === 'POST') {
        return await parseFORMBody(req, res, currentGoldPrice)
    }
    // SSE route (live prices) 
    if (req.url === '/live-price' && req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            "Cache-Control": 'no-cache',
            'Connection': 'keep-alive'
        })
        // shows a price instead of the placeholder
        currentGoldPrice = (Math.random() * 50).toFixed(2)
        res.write(`data: ${currentGoldPrice}\n\n`)

        const intervalPrice = setInterval(() => {
            currentGoldPrice = (Math.random() * 50).toFixed(2)
            res.write(`data: ${currentGoldPrice}\n\n`)
        }, 5000)  

        req.on('close', () => clearInterval(intervalPrice))
        return
    }
    // else route
    return await serveStatic(req, res, __dirname)
})

server.listen(PORT, () => {
    console.log(`Connected on PORT : ${PORT}`)
})

