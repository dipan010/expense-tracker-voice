import React from 'react'
import ReactDOM from 'react-dom'
import { SpeechProvider } from '@speechly/react-client'

import App from './App'
import { Provider } from './context/context'
import './index.css'

ReactDOM.render(
    <SpeechProvider appId="cc3bce7e-2d5c-4d45-a534-4ecbd362f42c" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);