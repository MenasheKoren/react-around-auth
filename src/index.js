import React from 'react';
import { render } from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

render(
  <React.StrictMode>
    <BrowserRouter>
      {/*<AuthProvider>*/}
      <App />
      {/*<Routes>*/}
      {/*  <Route element={<ProtectedRoute />}>*/}
      {/*    <Route path="/" element={<App />} />*/}
      {/*  </Route>*/}
      {/*  <Route element={<Layout />}>*/}
      {/*    <Route path="signup" element={<Register />} />*/}
      {/*    <Route path="signin" element={<Login />} />*/}
      {/*    <Route*/}
      {/*      path="*"*/}
      {/*      element={*/}
      {/*        <main style={{ padding: "1rem" }}>*/}
      {/*          <h1>Error 404: There's nothing here!</h1>*/}
      {/*        </main>*/}
      {/*      }*/}
      {/*    />*/}
      {/*  </Route>*/}
      {/*</Routes>*/}
      {/*</AuthProvider>*/}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
