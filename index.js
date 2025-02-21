import express from 'express';
import mongoose from 'mongoose';
import studentRouter from './routes/studentRouter.js';
import cors from 'cors'
import timelineRouter from './routes/timelineRouter.js';
import notiRouter from './routes/notificationRouter.js';
import markRouter from './routes/markRouter.js';
import teacherRouter from './routes/teacherRouter.js';
await mongoose.connect('mongodb+srv://minhduc180104:minhduc180104@learnmongo.zli6q.mongodb.net/student-management?retryWrites=true&w=majority&appName=LearnMongo')
import { setupSwagger } from "./swagger.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use('/students', studentRouter)
app.use('/timeline', timelineRouter)
app.use('/notifications', notiRouter)
app.use('/marks', markRouter)
app.use('/teachers', teacherRouter)

setupSwagger(app);

app.listen(8080, () => {
    console.log("Sever is running!")
})
