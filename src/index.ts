import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import artifactRouter from './routes/artifacts.route.js'

const app = new Hono();

// base it all in /api
app.route('/api', artifactRouter)

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
