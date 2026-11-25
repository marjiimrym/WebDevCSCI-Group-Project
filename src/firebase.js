import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
  apiKey: "AIzaSyD3OGXprUpU54kJmLcv-FMuptrzCsdWx_g",
  authDomain: "solar-929da.firebaseapp.com",
  projectId: "solar-929da",
  appId: "1:463853321201:web:19b3228cab87fdd3092250",
});

export const auth = getAuth(app);