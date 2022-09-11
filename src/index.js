import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Add from './Add';
import App from './App';
import Data from './Data';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Add />
    <br />
    <br />
    <App />
    <br />
    <br />
    <Data />
  </StrictMode>
);
