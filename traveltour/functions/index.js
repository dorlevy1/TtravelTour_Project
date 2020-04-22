const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
admin.initializeApp();
require("dotenv").config();

const {
  SENDER_EMAIL,
  SENDER_PASSWORD
} = process.env;

exports.sendEmailNotification = functions.firestore
  .document("contact/{docId}")
  .onCreate((snap, ctx) => {
    const data = snap.data();
    let authData = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: SENDER_EMAIL,
        pass: SENDER_PASSWORD,
      },
    });
    authData
      .sendMail({
        from: "traveltourrd@gmail.com",
        to: `${data.email}`,
        subject: "Wellcome to Traveltour 🛫",
        text: `${data.email}`,
        html: `
           <div style="background-color:#F2F6F5">
              <table align="center" cellpadding="0" cellspacing="0" width="100%">

              <tr>
                  <td align="center" bgcolor="#13EEB6" style="padding: 40px 0 30px 0;">
                        <a href="" style="color:#fff; font-size:40px; font-family: Arial; text-decoration:none">TravelTour</a>
                  </td>
              </tr>
                
              <tr>
                <td bgcolor="#ffffff">
                    <table align="center">
                        <tr>
                          <td align="center">
                            <h1 style="font-family: Arial;"> Hi, ${data.fullName} 😀</h1>
                            <p style="font-family: Arial;">Thanks for contacting us, it's important for <br> us to get back to you as soon as possible</p>
                          </td>
                        </tr>
                    </table>
                </td>
              </tr>

              <tr>
                <td align="center" style="padding: 40px 0 30px 0;">
                  <p></p>
                </td>
              </tr>
              </table>
            </div>
              `,
      })
      .then((res) => console.log("successfully sent that mail"))
      .catch((err) => console.log(err));
  });
