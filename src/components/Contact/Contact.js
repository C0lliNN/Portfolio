import React, { useRef, useState } from 'react';
import classes from './Contact.module.css';
import { useFormatMessage } from 'react-intl-hooks';
import config from '../../../config';
import { Form, Button, Spinner, Modal } from 'react-bootstrap';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState({});

  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const formatMessage = useFormatMessage();

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
          {formatMessage({
            id: 'Contact',
            defaultMessage: 'Contact'
          })}
        </h2>
        <p className="lead">
          {formatMessage({
            id: 'Email',
            defaultMessage: 'Email'
          })}
          {': '}
          <a href={`mailto:${config.email}`}>{config.email}</a>
        </p>
        <Form onSubmit={sendMessage} className={classes.Form}>
          <Form.Group controlId="name">
            <Form.Label>
              {formatMessage({
                id: 'Name',
                defaultMessage: 'Name'
              })}
            </Form.Label>
            <Form.Control ref={nameRef} />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>
              {formatMessage({
                id: 'Email',
                defaultMessage: 'Email'
              })}
            </Form.Label>
            <Form.Control type="email" ref={emailRef} />
          </Form.Group>
          <Form.Group controlId="subject">
            <Form.Label>
              {formatMessage({
                id: 'Subject',
                defaultMessage: 'Subject'
              })}
            </Form.Label>
            <Form.Control ref={subjectRef} />
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label>
              {formatMessage({
                id: 'Message',
                defaultMessage: 'Message'
              })}
            </Form.Label>
            <Form.Control as="textarea" rows="4" ref={messageRef} />
          </Form.Group>
          <div className="text-right">
            <Button type="submit">
              {formatMessage({
                id: 'Send',
                defaultMessage: 'Send'
              })}
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
                {error
                  ? formatMessage({
                      id: 'Error',
                      defaultMessage: 'Error'
                    })
                  : formatMessage({
                      id: 'Success',
                      defaultMessage: 'Success'
                    })}
              </p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="lead text-dark">
              {error
                ? formatMessage({
                    id: 'ErrorMessage',
                    defaultMessage: 'Something went wrong. Try again later.'
                  })
                : formatMessage({
                    id: 'Answer',
                    defaultMessage: "I'll answer you as soon as possible!"
                  })}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant={error ? 'danger' : 'primary'} onClick={closeModal}>
              {formatMessage({
                id: 'Close',
                defaultMessage: 'Close'
              })}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </section>
  );
};

export default Contact;
