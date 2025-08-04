import { createRoot } from 'react-dom/client'
import { HashRouter } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import React from 'react';

<React.StrictMode>
  <HashRouter>
    <App />
  </HashRouter>
</React.StrictMode>
createRoot(document.getElementById("root")!).render(<App />);
