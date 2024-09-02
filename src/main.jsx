import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* Footer */}
    <footer className="footer">
        <p>&copy; 2024 Interconectados. Todos los derechos reservados.</p>
        <div className="social-links">
          <a href="#instagram">Instagram</a>
        </div>
      </footer>
  </React.StrictMode>,
)
