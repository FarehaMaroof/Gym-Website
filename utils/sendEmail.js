const SibApiV3Sdk = require("sib-api-v3-sdk");


const client = SibApiV3Sdk.ApiClient.instance;
client.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;

const tranEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();

const sendEmail = async (to, subject, text) => {
  await tranEmailApi.sendTransacEmail({
    sender: {
      email: "farehamaroof10@gmail.com", // must be verified in Brevo
      name: "Gym App",
    },
    to: [{ email: to }],
    subject,
    textContent: text,
  });
};

module.exports = sendEmail;
