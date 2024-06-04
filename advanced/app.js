import express from 'express';
import userRouter from "./routes/userRoute.js"
import errorMiddleware from './middlewares/Error.js';

const app = express();

app.use("/user", userRouter);

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

app.use(errorMiddleware)