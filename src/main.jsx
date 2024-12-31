import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import SuccessSubmit from './views/SuccessSubmit/SuccessSubmit';
import SubscriptionPrompt from './views/subscriptionPrompt/SubscriptionPrompt';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <SubscriptionPrompt />
        <SuccessSubmit />
    </React.StrictMode>
);
