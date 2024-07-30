import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

export const ContactUs = () => {
  const form = useRef();
  const [message, setMessage] = useState(''); // Estado para el mensaje de éxito o error

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1dw7ben', 'template_820lu4r', form.current, {
        publicKey: '8QXXbqKW4AeEFVYV0',
      })
      .then(
        () => {
          setMessage('Mensaje envíado con éxito'); // Mensaje de éxito
          form.current.reset(); // Limpiar el formulario
        },
        (error) => {
          setMessage('Error al envíar el mensaje'); // Mensaje de error
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Nombre</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Pedido</label>
        <textarea name="message" />
        <input type="submit" value="Envíar" />
        {message && <p>{message}</p>} {/* Mostrar el mensaje de éxito o error */}
      </form>
    </StyledContactForm>
  );
};

export default ContactUs;

const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input, textarea {
      width: 100%;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid #2A86E2;

      &:focus {
        border: 2px solid #2A86E2;
      }
    }

    input {
      height: 35px;
    }

    textarea {
      max-height: 100px;
      min-height: 100px;
    }

    label {
      margin-top: 1rem;
      color: white;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #2A86E2;
      color: white;
      border: none;
    }

    p {
      margin-top: 1rem;
      color: white; /* Ajustar el color del mensaje aquí si es necesario */
    }
  }
`;
