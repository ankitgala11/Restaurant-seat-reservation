import app from "./app.js";
const PORT = process.env.PORT ;


app.listen(process.env.PORT, (err) => {
    console.log(`server started on port: ${PORT}`);
 });