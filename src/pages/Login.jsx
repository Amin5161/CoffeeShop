import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../components/Context/UserContext";
import { LoginUser } from "../firebase/LoginUser";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const user = await LoginUser(email, password);
      console.log("User logged : ", user.displayName);
      setModalVisible(true);
      setModalMessage("ورود موفق بود");
      setTimeout(() => {
        setModalVisible(false);
        navigate("/");
      }, 2000);
      setUser(user);
    } catch {
      setModalVisible(true);
      setModalMessage(" ایمیل یا گذزواژه اشتباه است");
      setTimeout(() => {
        setModalVisible(false);
      }, 3000);
      setError("ایمیل یا گذزواژه اشتباه است");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-300 dark:bg-zinc-700 h-screen flex items-start justify-center">
      <div className="container">
        {modalVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white py-4 px-20 rounded-lg shadow-lg text-clip">
              <p className="text-green-400">{modalMessage}</p>
            </div>
          </div>
        )}
        <div className="mt-40 mb-40">
          <form
            action=""
            className="max-w-[30rem] min-h-72  p-4 mx-auto shadow-personal rounded-md bg-white dark:bg-zinc-600 dark:text-white"
            onSubmit={handleLoginFormSubmit}
          >
            <h3> فرم ورود</h3>

            <input
              className="w-full bg-slate-200 p-2 rounded-md mt-4 outline-none dark:bg-zinc-300"
              type="email"
              placeholder="ایمیل"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
            <input
              type="password"
              placeholder="گذرواژه"
              className="w-full bg-slate-200 p-2 rounded-md mt-4 outline-none dark:bg-zinc-300"
              value={password || ""}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />

            <div className="flex justify-center items-center mt-4 gap-x-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-orange-400 py-2 px-8 w-3/4 rounded-md "
              >
                {loading ? (
                  <div className="flex justify-center items-center">
                    <div className="w-6 h-6 border-4 border-t-transparent border-gray-500 rounded-full animate-spin"></div>
                  </div>
                ) : (
                  "ورود"
                )}
              </button>
              <Link
                to="/registration"
                className="text-blue-500 underline dark:text-white"
              >
                ثبت نام
              </Link>
            </div>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </div>
  );
}
