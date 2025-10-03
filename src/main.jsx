import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import AppStore from './redux/AppStore.js'

ReactDom.createRoot(document.getElementById('root')).render(
  <Provider store={AppStore}>
    <StrictMode>
    <App />
  </StrictMode>
  </Provider>
)
