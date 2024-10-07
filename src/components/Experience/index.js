import React from "react";
import { useFormatMessage } from "react-intl-hooks";

const Experience = () => {
  const formatMessage = useFormatMessage();

  return (
    <section
      className="portfolio-section p-3 p-lg-5 d-flex align-items-center"
      id="experience"
    >
      <div className="w-100">
        <h2 className="mb-5">
          {formatMessage({
            id: "Experience",
            defaultMessage: "Experience",
          })}
        </h2>
        <div className="portfolio-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div>
            <h3 className="mb-0">Software Engineer</h3>
            <div className="subheading mb-3">Uber</div>
            <p>
              {formatMessage({
                id: "uber1",
                defaultMessage:
                  "Currently, I'm working at Uber as a Software Engineer. I'm part of the Uber Financial team, where I'm responsible for developing and maintaining a range of financial products.",
              })}
            </p>
          </div>
          <div className="portfolio-date text-md-right">
            <span className="text-primary">
              {formatMessage({
                id: "October 2024",
                defaultMessage: "October 2024",
              })}
              {" - "}
              {formatMessage({
                id: "Present",
                defaultMessage: "Present",
              })}
            </span>
          </div>
        </div>
        <div className="portfolio-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div>
            <h3 className="mb-0">Software Engineer</h3>
            <div className="subheading mb-3">Mercado Livre</div>
            <p>
              {formatMessage({
                id: "meliExperience1",
                defaultMessage:
                  "I was part of the fraud prevention team at Mercado Livre, serving as a Software Engineer. I was responsible for significantly contributing to the design and implementation of a range of credit products within the fraud prevention ecosystem, utilizing advanced skills in Golang and Java.",
              })}
            </p>
            <p className="my-3">
              {formatMessage({
                id: "meliExperience2",
                defaultMessage: `My contributions were crucial to the development of innovative solutions that have resulted in a monthly saving of millions of dollars for the company, while also enhancing user experience, ensuring safer and more efficient transactions.`,
              })}
            </p>
            <p>
              {formatMessage({
                id: "meliExperience3",
                defaultMessage:
                  "Furthermore, I interacted with various types of databases and messaging services, leveraging cutting-edge technologies to ensure the effectiveness and reliability of the implemented systems.",
              })}
            </p>
          </div>
          <div className="portfolio-date text-md-right">
            <span className="text-primary">
              {formatMessage({
                id: "April 2023",
                defaultMessage: "April 2023",
              })}
              {" - "}
              {formatMessage({
                id: "October 2024",
                defaultMessage: "October 2024",
              })}
            </span>
          </div>
        </div>
        <div className="portfolio-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div>
            <h3 className="mb-0">Software Engineer</h3>
            <div className="subheading mb-3">Wex</div>
            <p>
              {formatMessage({
                id: "wexExperience1",
                defaultMessage: `Consistent experience as a Software Engineer in a challenging and dynamic environment within a global-scale credit card issuer/processor. Responsible for actively contributing to the development and maintenance of a resilient and highly scalable system, processing over $10 billion in transactions annually.`,
              })}
            </p>
            <p className="mt-2">
              {formatMessage({
                id: "wexExperience2",
                defaultMessage: `Successfully conceived and implemented an innovative project introducing a new payment method, significantly optimizing user experience.`,
              })}
            </p>
          </div>
          <div className="portfolio-date text-md-right">
            <span className="text-primary">
              {formatMessage({
                id: "January 2022",
                defaultMessage: "January 2022",
              })}
              {" - "}
              {formatMessage({
                id: "April 2023",
                defaultMessage: "April 2023",
              })}
            </span>
          </div>
        </div>
        <div className="portfolio-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div>
            <h3 className="mb-0">Fullstack Developer</h3>
            <div className="subheading mb-3">KiwiMe</div>
            <p>
              {formatMessage({
                id: "kiwimeExperience1",
                defaultMessage: `I actively contributed as a Software Developer in a dynamic logistics startup, playing a key role in the successful design and implementation of an innovative system from scratch, which quickly attracted thousands of users within weeks.`,
              })}
            </p>
            <p className="mt-2">
              {formatMessage({
                id: "kiwimeExperience2",
                defaultMessage: `Utilizing a variety of cutting-edge technologies, including Java 11, Spring MVC, Spring WebFlux, Golang, PostgreSQL, DynamoDB, MongoDB, SQS, and SNS, I played an integral role in developing the robust and highly scalable backend that powered our platform. Additionally, I worked with CI/CD tools such as CircleCI and Jenkins.`,
              })}
            </p>
          </div>
          <div className="portfolio-date text-md-right">
            <span className="text-primary">
              {formatMessage({
                id: "March 2021",
                defaultMessage: "March 2021",
              })}
              {" - "}
              {formatMessage({
                id: "January 2022",
                defaultMessage: "January 2022",
              })}
            </span>
          </div>
        </div>
        <div className="portfolio-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div>
            <h3 className="mb-0">Fullstack Developer</h3>
            <div className="subheading mb-3">Gestão Inteligente Software</div>
            <p>
              {formatMessage({
                id: "gisExperience1",
                defaultMessage: `I played a significant role as an intern at a consulting firm specialized in on-demand software production for various clients. Responsible for a wide range of activities, from direct client interaction to project design and implementation, I made significant contributions to the company's revenue and reputation, ensuring the delivery of projects with quality and within the specified timeframe.`,
              })}
            </p>
            <p className="mt-2">
              {formatMessage({
                id: "gisExperience2",
                defaultMessage: `I was instrumental in the development of web applications using cutting-edge technologies such as PHP, Laravel, Vue.js, Bootstrap, and Tailwind, demonstrating strong skills in interface development and creating engaging user experiences. Additionally, I implemented integrations with renowned external services, including Mercado Pago Payments, Stripe Subscriptions, and Google Speech-Recognition, expanding the functional capabilities of the developed applications.`,
              })}
            </p>
          </div>
          <div className="portfolio-date text-md-right">
            <span className="text-primary">
              {formatMessage({
                id: "November 2020",
                defaultMessage: "November 2020",
              })}
              {" - "}
              {formatMessage({
                id: "May 2021",
                defaultMessage: "May 2021",
              })}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
