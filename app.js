import express from "express" 

const app = express();
app.post("/user", (req, res) =>{
    res.send({});
});

export default app;