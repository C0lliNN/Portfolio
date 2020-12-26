import React, { useCallback, useState } from 'react';
import classes from './styles.module.scss';
import { useFormatMessage } from 'react-intl-hooks';
import config from '../../../config';
import { Form, Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState({});

  const { register, errors, handleSubmit } = useForm();

  const formatMessage = useFormatMessage();

  const nameRef = register({
    required: {
      value: true,
      message: formatMessage({
        id: 'Field Required',
        defaultMessage: 'Field Required'
      }).toLocaleString()
    }
  });
  const emailRef = register({
    required: {
      value: true,
      message: formatMessage({
        id: 'Field Required',
        defaultMessage: 'Field Required'
      }).toLocaleString()
    },
    pattern: {
      // eslint-disable-next-line
      value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      message: formatMessage({
        id: 'Invalid Email',
        defaultMessage: 'Invalid Email'
      }).toLocaleString()
    }
  });
  const subjectRef = register({
    required: {
      value: true,
      message: formatMessage({
        id: 'Field Required',
        defaultMessage: 'Field Required'
      }).toLocaleString()
    }
  });
  const messageRef = register({
    required: {
      value: true,
      message: formatMessage({
        id: 'Field Required',
        defaultMessage: 'Field Required'
      })
    }
  });

  const sendMessage = useCallback(async (data) => {
    const { name, email, subject, message } = data;

    const emailData = {
      subject: subject,
      message: `
        Name: ${name}
        Email: ${email}
        
        ${message}
      `
    };

    setIsLoading(true);

    try {
      const response = await fetch(
        'https://us-central1-raphael-collin.cloudfunctions.net/sendEmail',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'Application/json'
          },
          body: JSON.stringify(emailData)
        }
      );

      if (response.ok) {
        setError(null);
      } else {
        throw new Error();
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
      setShowModal(true);
    }
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);

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
        <Form
          onSubmit={handleSubmit(sendMessage)}
          className={`${classes.Form} shadow-sm`}
        >
          <Form.Group controlId="name">
            <Form.Label className="text-dark">
              {formatMessage({
                id: 'Name',
                defaultMessage: 'Name'
              })}
            </Form.Label>
            <Form.Control
              ref={nameRef}
              name="name"
              isInvalid={errors.name}
              placeholder={formatMessage({
                id: 'Enter your Name',
                defaultMessage: 'Enter your Name'
              }).toLocaleString()}
            />
            {errors.name && (
              <Form.Control.Feedback type="invalid">
                {errors.name.message}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label className="text-dark">
              {formatMessage({
                id: 'Email',
                defaultMessage: 'Email'
              })}
            </Form.Label>
            <Form.Control
              type="email"
              ref={emailRef}
              name="email"
              isInvalid={errors.email}
              placeholder={formatMessage({
                id: 'Enter your Email',
                defaultMessage: 'Enter your Email'
              }).toLocaleString()}
            />
            {errors.email && (
              <Form.Control.Feedback type="invalid">
                {errors.email.message}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group controlId="subject">
            <Form.Label className="text-dark">
              {formatMessage({
                id: 'Subject',
                defaultMessage: 'Subject'
              })}
            </Form.Label>
            <Form.Control
              ref={subjectRef}
              name="subject"
              isInvalid={errors.subject}
              placeholder={formatMessage({
                id: 'Enter the Subject',
                defaultMessage: 'Enter the Subject'
              }).toLocaleString()}
            />
            {errors.subject && (
              <Form.Control.Feedback type="invalid">
                {errors.subject.message}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label className="text-dark">
              {formatMessage({
                id: 'Message',
                defaultMessage: 'Message'
              })}
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="4"
              ref={messageRef}
              name="message"
              isInvalid={errors.message}
              placeholder={formatMessage({
                id: 'Enter the Message',
                defaultMessage: 'Enter the Message'
              }).toLocaleString()}
            />
            {errors.message && (
              <Form.Control.Feedback type="invalid">
                {errors.message.message}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <div className="text-right">
            <Button type="submit" disabled={isLoading}>
              {isLoading
                ? formatMessage({
                    id: 'Sending',
                    defaultMessage: 'Sending...'
                  })
                : formatMessage({
                    id: 'Send',
                    defaultMessage: 'Send'
                  })}
            </Button>
          </div>
        </Form>
        <Modal show={showModal} onHide={closeModal} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>
              <h3
                className={`${
                  error ? 'text-danger' : 'text-primary'
                } font-weight-bold h1 mb-0`}
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
              </h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="lead text-dark">
              {error
                ? formatMessage({
                    id: 'Something went wrong. Try again later.',
                    defaultMessage: 'Something went wrong. Try again later.'
                  })
                : formatMessage({
                    id:
                      "Message sent successfully!. I'll answer you as soon as possible.",
                    defaultMessage:
                      "Message sent successfully!. I'll answer you as soon as possible."
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
