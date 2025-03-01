import ReactDOM from 'react-dom/client';

import { seedLocalDatabase } from '@/api/data/seed';
import ThemeProvider from '@/components/ThemeProvider';
import { Provider } from 'react-redux';
import App from './App';
import Router from './Router';
import { store } from './state/store';

import './index.css';

// DO NOT REMOVE: Seeds the local storage database with data
seedLocalDatabase();

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
     <ThemeProvider>
    <Router />
  </ThemeProvider>,
  </Provider>
 
);
