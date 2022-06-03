import express from "express";

const app = express();

app.get("/", (req, res)=>{
    res.status(200).render('index.ejs');
})

// Server configuration
//const PORT = 3000;
const PORT = process.env.PORT || 3000;
app.set('port', PORT);
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.json());

app.listen(app.get('port'), () =>{
    console.log(`Server running at port ${PORT}`);
})