import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import classes from './Contact.module.css';
import { FormattedMessage, injectIntl } from 'react-intl';
import config from '../../../config';
import { Form, Button, Spinner, Modal } from 'react-bootstrap';

const Contact = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState({});

  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const sendMessage = (event) => {
    event.preventDefault();
    const emailData = {
      subject: subjectRef.current.value,
      message: `
        Name: ${nameRef.current.value}
        Email: ${emailRef.current.value}
        
        ${messageRef.current.value}
      `
    };

    setIsLoading(true);

    fetch('https://us-central1-raphael-collin.cloudfunctions.net/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(emailData)
    })
      .then((response) => {
        return response.json();
      })
      .then(() => {
        setIsLoading(false);
        showModal(true);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
        showModal(true);
      });
  };

  const closeModal = () => setShowModal(false);

  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="contact"
    >
      <div className="w-100">
        <h2>
          <FormattedMessage id="Contact" defaultMessage="Contact" />
        </h2>
        <p className="lead">
          <FormattedMessage id="Email" defaultMessage="Email" />:{' '}
          <a href={`mailto:${config.email}`}>{config.email}</a>
        </p>
        <Form onSubmit={sendMessage} className={classes.Form}>
          <Form.Group controlId="name">
            <Form.Label>
              <FormattedMessage id="Name" defaultMessage="Name" />
            </Form.Label>
            <Form.Control
              placeholder={props.intl.formatMessage({
                id: 'YourName',
                defaultMessage: 'Your Name'
              })}
              ref={nameRef}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>
              <FormattedMessage id="Email" defaultMessage="Email" />
            </Form.Label>
            <Form.Control
              type="email"
              placeholder={props.intl.formatMessage({
                id: 'YourEmail',
                defaultMessage: 'Your Email'
              })}
              ref={emailRef}
            />
          </Form.Group>
          <Form.Group controlId="subject">
            <Form.Label>
              <FormattedMessage id="Subject" defaultMessage="Subject" />
            </Form.Label>
            <Form.Control
              placeholder={props.intl.formatMessage({
                id: 'EnterSubject',
                defaultMessage: 'Enter the Subject'
              })}
              ref={subjectRef}
            />
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label>
              <FormattedMessage id="Message" defaultMessage="Message" />
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="4"
              placeholder={props.intl.formatMessage({
                id: 'EnterMessage',
                defaultMessage: 'Enter your Message...'
              })}
              ref={messageRef}
            />
          </Form.Group>
          <div className="text-right">
            <Button type="submit">
              <FormattedMessage id="Send" defaultMessage="Send" />
            </Button>
          </div>
        </Form>
        <div className="mt-3 text-center">
          {isLoading && (
            <Spinner animation="border" variant="primary" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}
        </div>

        <Modal show={showModal} onHide={closeModal} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>
              <p
                className={`${
                  error ? 'text-danger' : 'text-primary'
                } font-weight-bold display-4`}
              >
                {error ? (
                  <FormattedMessage id="Error" defaultMessage="Error" />
                ) : (
                  <FormattedMessage id="Success" defaultMessage="Success" />
                )}
              </p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="lead text-dark">
              {error ? (
                <FormattedMessage
                  id="ErrorMessage"
                  defaultMessage="Something went wrong. Try again later."
                />
              ) : (
                <FormattedMessage
                  id="Answer"
                  defaultMessage="I'll answer you as soon as possible!"
                />
              )}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant={error ? 'danger' : 'primary'} onClick={closeModal}>
              <FormattedMessage id="Close" defaultMessage="Close" />
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </section>
  );
};

Contact.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func
  })
};

export default injectIntl(Contact);
