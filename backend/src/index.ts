// Load env variables (only in development)
// if (process.env.NODE_ENV !== 'production') {
  import('dotenv/config')
// }

import { Hono } from 'hono'
// import { supabase } from './libs/supabase.js'
import { cors } from 'hono/cors';

// Routers
import artifactRouter from './routes/artifacts.route.js'
import artifactTypeRouter from './routes/artifacts-type.route.js'
import eatsRouter from './routes/eats.route.js'
import ethnicGroupRouter from './routes/ethnic-group.route.js'
import folkloreRouter from './routes/folklore.route.js'
import landmarkRouter from './routes/landmark.route.js'
import languageRouter from './routes/language.route.js'
import livesRouter from './routes/lives.route.js'
import regionRouter from './routes/region.route.js'
import singRouter from './routes/sing.route.js'
import speakRouter from './routes/speaks.route.js'
import traditionClassRouter from './routes/tradition-class.route.js'
import traditionRouter from './routes/tradition.route.js'
import traditionalClothesRouter from './routes/traditional-clothes.route.js'
import traditionDanceRouter from './routes/traditional-dance.route.js'
import traditionalFoodRouter from './routes/traditional-food.route.js'
import traditionalHouseRouter from './routes/traditional-house.route.js'
import traditionalSongRouter from './routes/traditional-song.route.js'
import userRouter from './routes/user.route.js'
import wearRouter from './routes/wear.route.js'
import { serve } from '@hono/node-server'

const app = new Hono()
app.use(cors({
  origin: 'https://fe-traditia.vercel.app/', // or '*'
}));

// Register routes
app.route('/api', artifactRouter)
app.route('/api', artifactTypeRouter)
app.route('/api', eatsRouter)
app.route('/api', ethnicGroupRouter)
app.route('/api', folkloreRouter)
app.route('/api', landmarkRouter)
app.route('/api', languageRouter)
app.route('/api', livesRouter)
app.route('/api', regionRouter)
app.route('/api', singRouter)
app.route('/api', speakRouter)
app.route('/api', traditionClassRouter)
app.route('/api', traditionRouter)
app.route('/api', traditionalClothesRouter)
app.route('/api', traditionDanceRouter)
app.route('/api', traditionalFoodRouter)
app.route('/api', traditionalHouseRouter)
app.route('/api', traditionalSongRouter)
app.route('/api', userRouter)
app.route('/api', wearRouter)

// Health check
app.get('/', (c) => c.text('Server is healthy. Heads up Hono!'))

// Supabase test route
// app.get('/users', async (c) => {
//   const { data, error } = await supabase.from('users').select('*')
//   if (error) return c.json({ error: error.message }, 500)
//   return c.json(data)
// })

serve({
  fetch: app.fetch,
  port: 5678
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
