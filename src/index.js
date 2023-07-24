// import ReactDOM from "react-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ExpenseContextProvider } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ExpenseContextProvider>
      <App />
    </ExpenseContextProvider>
  </>
);
