import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

export const ContactUs = () => {
  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1dw7ben', 'template_820lu4r', form.current, {
        publicKey: '8QXXbqKW4AeEFVYV0',
      })
      .then(
        () => {
          setMessage('Mensaje envíado con éxito');
          form.current.reset();
        },
        (error) => {
          setMessage('Error al envíar el mensaje');
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
        <input type="submit" value="Enviar" />
        {message && <p className={message.includes('Error') ? 'error' : 'success'}>{message}</p>}
      </form>
    </StyledContactForm>
  );
};

export default ContactUs;


const StyledContactForm = styled.div`
  width: 400px;
  margin: auto; /* Centrar el formulario horizontalmente */

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input, textarea {
      width: 100%;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid #2A86E2;
      background-color: #fff; /* Fondo blanco para asegurar contraste */
      color: black; /* Color del texto negro */
      
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
      border-radius: 5px; /* Asegura bordes redondeados */
      padding: 10px 20px; /* Añade padding para el botón */
      font-size: 16px; /* Ajusta el tamaño de fuente */
      text-align: center; /* Centra el texto dentro del botón */
      transition: background-color 0.3s, transform 0.3s; /* Añade transición para los efectos de hover */
      display: inline-block; /* Asegura que el botón respete el tamaño del contenido */
      line-height: 1; /* Ajusta la altura de línea para centrar verticalmente */
    }

    input[type="submit"]:hover {
      background: #1a5bb8; /* Color más oscuro para el hover */
      transform: scale(1.05); /* Escala ligeramente el botón */
    }

    p {
      margin-top: 1rem;
      font-size: 14px; /* Ajustar el tamaño de fuente del mensaje */
    }

    .success {
      color: #5fa4e9; /* Verde para mensajes de éxito */
    }

    .error {
      color: #e2862a; /* Rojo para mensajes de error */
    }
  }
`;
