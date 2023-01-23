import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { CssVarsProvider } from '@mui/joy';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ContextProvider } from './context.jsx';
import store from './store/store.js';
import './config';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CssVarsProvider>
    <BrowserRouter>
      <Provider store={store}>
        <ContextProvider>
          <App />
        </ContextProvider>
      </Provider>
    </BrowserRouter>
  </CssVarsProvider>
);
