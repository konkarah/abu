const express = require('express')
const app = express()
const nodemailer = require('nodemailer');
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 3000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/test',mymailer, (req,res)=> {
    const account = req.body.account
    const amount = req.body.amount
    const mail = req.body.mail

    console.log(account, amount, mail)

    mymailer(mail.tostring(), account)

    res.send("Good")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function mymailer(themail,account){
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: "itsthindi@gmail.com",
          pass: "ynbgzxupqcikhtig",
        },
      });
      
      // async..await is not allowed in global scope, must use a wrapper
      async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: 'itsthindi@gmail.com', // sender address
          to: themail, // list of receivers
          subject: "Hello ✔", // Subject line
          text: "Hello world?", // plain text body
          html: "<b>Hello world?</b>", // html body
        });
    }      
}