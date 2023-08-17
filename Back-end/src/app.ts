import express, { Request, Response } from "express";
import cors from 'cors'
import { authRouters, userRouters, postsRouters, followRouters } from "./routers";

const app = express();

app.use(express.json())
app.use(cors())

app.get('/health', (req: Request, res: Response) => res.status(200).send('Server on'))
    .use(authRouters)
    .use('/user', userRouters)
    .use('/post', postsRouters)
    .use('/follow', followRouters)

export default app

