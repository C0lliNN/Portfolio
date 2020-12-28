import * as functions from "firebase-functions";
import * as yup from "yup";
import * as nodemailer from "nodemailer";

export const sendEmail = functions.https.onRequest(
  async (request, response) => {
    const schema = yup.object().shape({
      subject: yup.string().required(),
      message: yup.string().required(),
    });

    try {
      const valid = await schema.isValid(request.body);

      if (!valid) {
        response.sendStatus(400);
      } else {
        const { subject, message } = request.body;

        const { user, password, unsecure } = functions.config().sendinblue;

        const transporter = nodemailer.createTransport({
          host: "smtp-relay.sendinblue.com",
          port: 587,
          secure: !unsecure,
          auth: {
            user: user,
            pass: password,
          },
        });

        await transporter.sendMail({
          from: user,
          to: "raphael_professional@yahoo.com",
          subject,
          text: message,
        });

        response.sendStatus(201);
      }
    } catch (err) {
      response.sendStatus(500);
      functions.logger.error(err.message);
    }
  },
);
