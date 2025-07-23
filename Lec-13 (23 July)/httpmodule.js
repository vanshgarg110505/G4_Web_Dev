// HTTP SERVER
const http = require('node:http')

const blogPost = [
    {
        blogTitle: 'THIS IS TILE OF BLOG',
        blogDescription: 'THIS IS DESCRIPTION OF BLOG',
        authorBlog: 'Yash',
        date: '22 July',
    },
]

const server = http.createServer((req, res) => {
    if (req.method == 'GET' && req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('DATA FETCHED RESPONSE SEND')
    } else if (req.method == 'GET' && req.url == '/blog') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(blogPost))
    } else if (req.method == 'POST' && req.url == '/blog') {
        let blog = ''
        req.on('data', (chunk) => (blog += chunk))

        req.on('end', () => {
            try {
                const blogData = JSON.parse(blog)
                blogPost.push(blogData)
                res.end('DATA ADDED')
            } catch (err) {
                console.log(err)
            }
        })
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('NOT FOUND')
    }
})

server.listen(8000, () => {
    console.log('YOUR SERVER RUNNING ON PORT 8000')
})
