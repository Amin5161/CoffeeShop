import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../components/Context/UserContext";
import { LoginUser } from "../firebase/LoginUser";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const user = await LoginUser(email, password);
      console.log("User logged : ", user.displayName);
      navigate("/");
      alert("ورود موفق بود");
      setUser(user);
    } catch {
      alert(" ایمیل یا گذزواژه اشتباه است");
      setError("ایمیل یا گذزواژه اشتباه است");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-300 dark:bg-zinc-700 h-screen flex items-start justify-center">
      <div className="container">
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
            />
            <input
              type="password"
              placeholder="گذرواژه"
              className="w-full bg-slate-200 p-2 rounded-md mt-4 outline-none dark:bg-zinc-300"
              value={password || ""}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="flex justify-center items-center mt-4 gap-x-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-orange-400 py-2 px-8 w-3/4 rounded-md "
              >
                {loading ? "در حال ورود..." : "ورود"}
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
