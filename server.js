const express = require('express')
const app = express()
const nodeMailer = require('nodemailer');
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 3000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/test', (req,res)=> {
    const account = req.body.account
    const amount = req.body.amount
    const mail = req.body.mail

    console.log(account, amount, mail)

    res.send("Good")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function mymailer(){
let transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 587, false for other ports
    requireTLS: true,
    auth: {
        user: 'itsthindi@gmail.com',
        pass: 'ynbgzxupqcikhtig'
    },
});

let mailOptions = {
    from: 'itsthindi@gmail.com',
    to: 'lawrencethindi99@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
       console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
}