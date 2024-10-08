import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Store } from './redux/store.js'
import {Provider} from 'react-redux'
 
createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
  <StrictMode>
    <App />
  </StrictMode>
  </Provider>
)
