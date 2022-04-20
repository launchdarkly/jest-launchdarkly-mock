import Express from 'express'

const PORT = 3000
const app = Express()

app.use('/dist', Express.static('dist', { maxAge: '1d' }))

app.use((req, res) => {
  const html = `<!DOCTYPE html>
                    <html>
                      <head>
                        <meta charset="utf-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1">
                        <title>Universal Hot Reload</title>
                      </head>
                      <body>
                        <div id="reactDiv" />
                        <script type="application/javascript" src="/dist/bundle.js"></script>
                      </body>
                    </html>`

  res.end(html)
})

// export httpServer object so universal-hot-reload can access it
export default app.listen(PORT, () => {
  console.log(`Example app listening at ${PORT}...`)
})
