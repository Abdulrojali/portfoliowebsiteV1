const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json());


app.get('/download/:filename',(req,res)=>{
  try{
    const {filename} = req.params
    const publicFile = path.join(__dirname,'public',filename)
     res.download(publicFile,(err)=>{
      if(err){
        res.status(500).send('not found data')
      }
    })
  }
  catch(err){
    throw new Error(err)
  }
})
app.listen(8080,()=>{
    console.log('http://localhost:8080')
})
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rojaliabdul4@gmail.com',
      pass:'ihdl qyiz dgzx uaza',
    },
  });

app.post('/sendEmail',async(req,res)=>{
    try{
        const {email,judul,text}=req.body
        const mailOptions = {
            from: email,
            to: 'rojaliabdul4@gmail.com',
            subject: judul,
            text: text,
          };
        
        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log(error);
              return res.status(500).send('Error sending email');
            }
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
          });
        
    }
    catch(err){
        throw new Error(err)
    }
})

