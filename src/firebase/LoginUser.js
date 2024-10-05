import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./FirebaseConfig";
export function LoginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Login موفقیت آمیز بود
      const user = userCredential.user;
      console.log("user logged in", user);
      return user;
    })
    .catch((error) => {
      // اگر اروری وجود داشت
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error logging in", errorCode, errorMessage);
      throw error;
    });
}
