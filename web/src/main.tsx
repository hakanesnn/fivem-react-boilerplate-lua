import React from 'react';
import ReactDOM from 'react-dom/client';
import { VisibilityProvider } from './providers/VisibilityProvider';
import App from './components/App';
import './index.css';
import LocaleProvider from './providers/LocaleProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<LocaleProvider>
			<VisibilityProvider>
				<App />
			</VisibilityProvider>
		</LocaleProvider>
	</React.StrictMode>
);
