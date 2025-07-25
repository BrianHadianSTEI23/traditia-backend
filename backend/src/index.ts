import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import artifactRouter from './routes/artifacts.route.js'
import artifactTypeRouter from './routes/artifacts-type.route.js';

const app = new Hono();

// base it all in /api
app.route('/api', artifactRouter)
app.route('/api', artifactTypeRouter)

app.get('/', (c) => {
  return c.text('Server is healthy. Heads up Hono!')
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
