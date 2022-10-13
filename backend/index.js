var express= require("express")
var bodyParser= require("body-parser")
var mongoose= require("mongoose")
var cors = require("cors");

let port = process.env.PORT || 3001;

let app= express();
let User= require("./routes/user") 



mongoose.connect("mongodb+srv://userGCG:gallardo12@cluster0.orkrkzu.mongodb.net/Provedores_GCG?retryWrites=true&w=majority",
    (err, res) => {
        if (err) {
            throw err;
        } else {
            console.log('BD On..');
            app.listen(port, function () {
                console.log("Servidor Backend On");
        });
    }
    });

    mongoose.connection.on('connected', () => {
        console.log("mongo atlas");
    });


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors());
app.use(express.static(`./upload`))

app.use("/api",User);

const storage = multer.diskStorage(
    {
        filename:function(res,file,cb){
            const ext =file.originalname.split(".").pop()
            const fileName = Date.now();
            cb(null,`${fileName}.${ext}`);
        },
        destination:function(res,file,cb){
            cb(null,`./upload`)
        },
    }
)
const upload = multer({storage})

app.post(`/upload`,upload.single('myfile'), (req, res) => {
        const file = req.file.filename;
    res.send({data:"okey", url: `http://localhost:3000/${file}`})
})
module.exports= app;
