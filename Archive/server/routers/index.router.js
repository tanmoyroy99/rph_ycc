const express = require('express');
const router = express.Router();
const User = require('./../model/user.model')
// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey('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')

// router.get('/login',(req,res)=>{
//     const msg = {
//         to: 'tanroy18@in.ibm.com', // Change to your recipient
//         from: 'tanroy18@in.ibm.com', // Change to your verified sender
//         subject: 'Sending Test Mail',
//         text: 'Test mail Event with Node.js',
//         html: '<strong>Test HTML mail with Node.js</strong>',
//       }
//     console.log("Test::", msg);

//     sgMail.send(msg).then((response) => {
//         console.log("Success Response:::")
//         console.log(response[0].statusCode)
//         console.log(response[0].headers)
//     }).catch((error) => {
//         console.error("ERROR:")
//         console.error(error)
//     })


//     res.send('test');
// })

router.get('/test',(req,res)=>{
    console.log("Test is calling...");
    User.findOne({}).then(data => {
        console.log("Table ok", data)
    }).catch(error => {
        console.log("Error Table", error)
    });
    res.send("test");
});

module.exports = router;