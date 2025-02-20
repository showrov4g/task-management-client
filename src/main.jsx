import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './Context/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(

    <AuthProvider>
      <App/>
      <ToastContainer />
    </AuthProvider>
  
  // <StrictMode>
  //   <App />
  // </StrictMode>,
)
