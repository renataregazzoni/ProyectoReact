
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBrvaPXoWXgH29XxN_RUhUZFVt_CJIYbsg",
  authDomain: "ecommercereactrr.firebaseapp.com",
  projectId: "ecommercereactrr",
  storageBucket: "ecommercereactrr.appspot.com",
  messagingSenderId: "931049765581",
  appId: "1:931049765581:web:b05f26cce9665b89768784",
  measurementId: "G-SJ7ETZ58PC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig
export const db = getFirestore(app);