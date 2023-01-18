
  const http = require('http')

  const port = 3000

  const requestHandler =(request, response)=> {

            console.log(request.url)

            response.end('Hello Node js server!')

                 }

  const server = http.createServer(requestHandler)

    server.listen(port, (err) => {

       if (err) {

       return console.log('some error has occured on server')

                }

         console.log(`server is listening on ${port}`)

               })
