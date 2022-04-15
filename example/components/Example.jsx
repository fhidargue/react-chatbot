import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from '../../lib/index';

const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'Arial',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a'
};

const steps = [
  {
    id: '0',
    message: 'Bienvenido al chatbot creado con React.js!',
    trigger: '1'
  },
  {
    id: '1',
    message: 'Por favor, ingresa tu nombre.',
    trigger: '2'
  },
  {
    id: '2',
    user: true,
    trigger: '3'
  },
  {
    id: '3',
    message: 'Hola {previousValue}, un placer!',
    trigger: '4'
  },
  {
    id: '4',
    message: 'Me puedes decir, ¿en qué número estoy pensando?',
    trigger: '5'
  },
  {
    id: '5',
    options: [
      { value: 1, label: 'Número 1', trigger: '7' },
      { value: 2, label: 'Número 2', trigger: '6' },
      { value: 3, label: 'Número 3', trigger: '6' }
    ]
  },
  {
    id: '6',
    message: 'Pues no, intenta de nuevo.',
    trigger: '5'
  },
  {
    id: '7',
    message: '¡Excelente! Ese mismo era.',
    trigger: '8'
  },
  {
    id: '8',
    message: 'Gracias por jugar, nos vemos.',
    end: true
  }
];

const ThemedExample = () => (
  <ThemeProvider theme={otherFontTheme}>
    <React.StrictMode>
      <ChatBot steps={steps} />
    </React.StrictMode>
  </ThemeProvider>
);

export default ThemedExample;
