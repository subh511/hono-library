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

async function authMiddleware(c:any,next:any){
  if(c.req.headers("Authorization")){
    await next()
  }else{
    return c.text("You dont have access")
  }
}
app.use(authMiddleware)

app.post('/', async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})

export default app