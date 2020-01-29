const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const uploadData = require('express-fileupload');
var path = require("path");
var session = require('express-session');
const router      = express.Router();

//connection mongodb
// connect mongo
mongoose.connect('mongodb://localhost/ujian')
    .then(db => console.log('db_conected'))
    .catch(err => console.log(err))

app.use(
    session({
        secret: "secret",
        resave: true,
        saveUninitialized: true
    })
);

app.use(uploadData());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

let corsOptions = {
    origin: '*',
    methods: ['*'],
    allowedHeaders: ['Content-Type', 'tokenshop']
}

app.use(cors(corsOptions))
app.use(express.static(path.join(__dirname, "public")));






// Router API

router.post('/login', function(req, res){
  User.findOne({
    email: req.body.email
  }, function(err, user){
    if(err) throw err;

    if (!user) {
      res.json({success: false, message: 'User tidak ada di database'});
    }else {
      //harusnya passwordnya hash
      if (user.password != req.body.password) {
        res.json({succes: false, message: 'password user salah!'});
      }
      else {
        //membuat token
        let token = jwt.sign(user, app.get('secretKey'), {
          expiresIn:  604800
        });

        //ngirim balik token
        res.json({
          succes : true,
          message: 'token berhasil didapatkan!',
          token  : token
        })
      }
    }
  })
});

router.get('/', function(req, res){
  res.send('ini di route home!');
});

//proteksi route dengan token
router.use(function(req, res, next){
  //mengambil token: req.body.token || req.query.token ||
  var token = req.headers['authorization'];

  //decode token
  if(token){

    jwt.verify(token, app.get('secretKey'), function(err, decoded){
      if(err)
        return res.json({ success: false, message: 'problem dengan token' });
      else {
        req.decoded = decoded;

        //apakah sudah expire
        if(decoded.exp <= Date.now()/1000) {
          return res.status(400).send({
            success:false,
            message:'token sudah expire',
            date   : Date.now()/1000,
            exp    : decoded.exp
          });
        }

        next();
      }
    });

  }else{
    return res.status(403).send({
      success:false,
      message:'token tidak tersedia'
    });
  }

});

router.get('/users', function(req, res){
  User.find({}, function(err, users){
    res.json(users);
  });
});

router.get('/profile', function(req, res){
  res.json(req.decoded._doc);
});

//prefix /api
app.use('/api', router);







const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log('Berhasil menjalankan server pada port 8000')
})