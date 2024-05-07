// import { Hono } from 'hono'

// const app = new Hono()

// app.get('/', (c) => {
//   return c.json({
//     msg: "hello world!"
//   })
// })

// app.post('/user', function(c){
//   return c.text('No No Hono!')
// })

// export default app


import { Hono } from 'hono'

const app = new Hono()

app.post('/', async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})

export default app