import express from "express" 

const app = express();
app.post("/user", (req, res) =>{
    res.send("hola mundo");
});

export default app;