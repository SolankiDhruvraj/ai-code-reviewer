import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import aiRoutes from './routes/ai.routes.js'

const app = express()
const corsOptions = {
    origin: [process.env.FRONTEND_URL, "chrome-extension://*", "http://localhost:5173"],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', "Authorization"]
}
app.use(express.json())
app.use(cors(corsOptions))
app.use('/ai', aiRoutes)

app.listen(process.env.PORT, () => {
    console.log("App running at port", process.env.PORT)
})

export default app;