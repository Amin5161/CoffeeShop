import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db, auth } from "./FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export const registerUser = async (email, password, additionalData) => {
  try {
    // ایجاد حساب کاربری با ایمیل و رمز عبور
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    await updateProfile(user, {
      displayName: additionalData.name,
    });

    // اضافه کردن اطلاعات اضافی کاربر در Firestore
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      email: user.email,
      name: additionalData.name, // ذخیره نام کاربر
      phone: additionalData.phone, // ذخیره شماره تلفن کاربر
      createdAt: new Date(),
    });
    console.log("User registered successfully!");
  } catch (error) {
    console.error("Error registering user: ", error.message);
  }
};
