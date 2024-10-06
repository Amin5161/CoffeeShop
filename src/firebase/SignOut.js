import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const handleLogout = async () => {
  const navigate = useNavigate();
  const auth = getAuth();
  try {
    await signOut(auth);
    // پس از خروج از حساب، کاربر را به صفحه ورود هدایت کنید
    console.log("User signed out successfully.");
    navigate('/login')
  } catch (error) {
    console.error("Error signing out: ", error);
  }
};
