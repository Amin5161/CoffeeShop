import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../components/Context/UserContext";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleChangeLoginForm = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    console.log(formData);
  };

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get("http://localhost:3000/users");
    console.log(response.data);
    const users = response.data;
    const user = users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );
    if (user) {
      alert("ورود موفق بود");
      setUser(user);
      navigate("/");
    } else {
      alert(" ایمیل یا گذزواژه اشتباه است");
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
            <h3>حساب کاربری</h3>

            <input
              className="w-full bg-slate-200 p-2 rounded-md mt-4 outline-none dark:bg-zinc-300"
              type="email"
              name="email"
              id=""
              placeholder="ایمیل"
              value={formData.email || ""}
              onChange={handleChangeLoginForm}
            />
            <input
              type="password"
              name="password"
              id="pass"
              placeholder="گذرواژه"
              className="w-full bg-slate-200 p-2 rounded-md mt-4 outline-none dark:bg-zinc-300"
              value={formData.password || ""}
              onChange={handleChangeLoginForm}
            />

            <div className="flex justify-center items-center mt-4 gap-x-4">
              <button
                type="submit"
                className="bg-orange-400 py-2 px-8 w-3/4 rounded-md "
              >
                ورود
              </button>
              <button
                type="button"
                className="text-blue-500 underline dark:text-white"
                onClick={() => {
                  // پاکسازی فرم ثبت‌نام
                  setFormData({
                    email: "",
                    pass: "",
                  });
                  navigate("/registration");
                }}
              >
                ثبت نام
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
