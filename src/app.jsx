import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import SuccessSubmit from './views/SuccessSubmit/SuccessSubmit';
import SubscriptionPrompt from './views/subscriptionPrompt/SubscriptionPrompt';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SubscriptionPrompt />} />
                <Route path="/success-submit" element={<SuccessSubmit />} />
            </Routes>
        </Router>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
