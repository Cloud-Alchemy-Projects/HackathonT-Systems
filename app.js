import express from "express";
import homeRouter from './server/routes/home.js';
import demoRouter from './server/routes/demo.js';
import aboutRouter from './server/routes/about.js';
import defaultRouter from './server/routes/default.js';

const app = express();

// Server configuration
const PORT = process.env.PORT || 3000;
app.set('port', PORT);
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.json());

// Routes
app.use("/", homeRouter)
app.use("/demo", demoRouter)
app.use("/about", aboutRouter)
app.use("/*", defaultRouter)

app.listen(app.get('port'), () =>{
    console.log(`Server running at port ${PORT}`);
})