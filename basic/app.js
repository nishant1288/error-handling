import express from 'express';

const app = express();

const PORT = 8000;

// app.get("/", (req, res) => {
//     res.send("HEllp");
//     res.json({
//         success : true
//     })
//     res.status(404).json({
//         message: "Error 404"
//     })
// })

class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

app.get("/",
    (req, res, next) => {
        console.log("A");
        return next(new ErrorHandler("Not Found", 401)); // good practice to use return if error occurs it should throw and get out of the cycle
    },
    (req, res, next) => {
        console.log("B");
        next();
    },
    (req, res, next) => {
        console.log("C")
    })

app.use((err, req, res, next) => {  // Whenever an error is thrown this handler will be called.
    console.log("Error is Here");
    err.statusCode = err.statusCode || 400;
    err.message = err.message || 'Internal Server Error'
    res.status(err.statusCode).json({
        message: err.message
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
