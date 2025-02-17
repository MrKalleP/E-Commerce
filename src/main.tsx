import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { store } from "store/store.ts";
import App from './App.tsx'
import './index.css'
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
// 	apiKey: import.meta.env.DB_PASSWORD,
// 	authDomain: import.meta.env.AUTH_DOMAIN,
// 	projectId: import.meta.env.PROJECT_ID,
// 	storageBucket: import.meta.env.STORAGE_BUCKET,
// 	messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
// 	appId: import.meta.env.APP_ID,
// 	measurementId: import.meta.env.MEASUREMENT_ID,
// };
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
