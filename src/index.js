import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import ThankYouCard1 from './ui-components/ThankYouCard1';
import Desktop1 from './ui-components/Desktop1';
import { ThemeProvider } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
import '@aws-amplify/ui-react/styles.css';
import studioTheme from './ui-components/studioTheme';

Amplify.configure(amplifyconfig);

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Desktop1 />} />
        <Route path="/ThankYouCard" element={<ThankYouCard1 />} />
        {/* Other routes... */}
      </Routes>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={studioTheme}>
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
