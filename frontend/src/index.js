import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SidebarProvider from './components/SidebarContext';
import CartProvider from './components/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SidebarProvider> 
        <CartProvider> 
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </CartProvider> 
    </SidebarProvider>

);

reportWebVitals();
