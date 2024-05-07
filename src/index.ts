import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.json({
    msg: "hello world!"
  })
})

app.post('/user', function(c){
  return c.text('No No Hono!')
})

export default app
