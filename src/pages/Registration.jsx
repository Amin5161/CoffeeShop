import { useState } from "react";
import { registerUser } from "../firebase/CreateUser";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setModalMessage("رمز عبور وتکرار آن باید یکسان باشد");
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
      }, 3000);
      return;
    }

    const additionalData = {
      name: name,
      phone: phone,
    };

    setLoading(true);
    try {
      await registerUser(email, password, additionalData); // فراخوانی تابع ثبت‌نام
      setModalMessage("ثبت نام شما با موفقیت انجام شد");
      setModalVisible(true);

      setTimeout(() => {
        setModalVisible(false);
        navigate("/login"); // هدایت کاربر به صفحه لاگین پس از موفقیت
      }, 3000);
    } catch (error) {
      setError("خطا در ثبت‌نام: " + error.message);
      setModalMessage("خطا در ثبت نام" + error.message);
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-40 pb-40 dark:bg-zinc-500">
      <div className="container">
        {modalVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-clip">
              <p className="text-green-400">{modalMessage}</p>
            </div>
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="max-w-[30rem] min-h-72  p-4 mx-auto shadow-personal rounded-md dark:bg-zinc-600 "
        >
          <h3>حساب کاربری</h3>
          {/* نمایش خطا در صورت وجود */}
          {error && <p className="text-red-500">{error}</p>}{" "}
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="w-10 h-10 border-4 border-t-transparent border-gray-500 rounded-full animate-spin"></div>
            </div>
          ) : (
            <></>
          )}
          <input
            className="w-full bg-slate-200 text-black p-2 mt-4 rounded-md dark:text-black"
            type="text"
            name="name"
            placeholder="نام "
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
          />
          <input
            className="w-full bg-slate-200 p-2 rounded-md mt-4 "
            type="text"
            placeholder="شماره تلفن"
            value={phone || ""}
            onChange={(e) => setPhone(e.target.value)}
            disabled={loading}
          />
          <input
            className="w-full bg-slate-200 p-2 rounded-md mt-4  "
            type="email"
            placeholder=" ایمیل"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          <input
            type="password"
            name="password"
            id="pass"
            placeholder="گذرواژه"
            className="w-full bg-slate-200 p-2 rounded-md mt-4 "
            value={password || ""}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
          <input
            type="password"
            placeholder="تکرار گذرواژه"
            className="w-full bg-slate-200 p-2 rounded-md mt-4 "
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword || ""}
            disabled={loading}
          />
          <div className="flex justify-start items-center mt-4 gap-x-8 ">
            <button
              type="submit"
              className={`bg-orange-400 py-2 px-8 w-3/4 rounded-md ${
                loading ? "opacity-50" : ""
              }`}
              disabled={loading}
            >
              ثبت نام
            </button>
            <Link
              to="/login"
              className="text-blue-500 dark:text-white underline"
            >
              ورود
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
