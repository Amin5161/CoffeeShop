import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

export default function Registration() {
  const [isLogin, setIsLogin] = useState(false);
  const [isEmailExist, setIsEmailExist] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
  });

  const navigate = useNavigate();

  // چک کردن ایمیل تکراری

  const checkEmailExist = async (email) => {
    const response = await axios.get(
      `http://localhost:3000/users?email=${email}`
    );
    return response.data.length > 0;
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;

    // مقدار به روز رسانی شده در دسترس است
    console.log("Current value:", value); // آخرین مقدار ورودی کاربر

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors({ ...errors, [name]: "" });

    if (name === "email") {
      const exist = await checkEmailExist(value);
      setIsEmailExist(exist);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEmailExist) {
      alert("این ایمیل قبلا ثبت نام شده است");
      return;
    }

    const validations = {};

    if (!formData.name) {
      validations.name = "نام الزامی است";
    }
    if (!formData.lastname) {
      validations.lastname = "نام خانوادگی الزامی است";
    }

    if (!formData.email) {
      validations.email = "ایمیل الزامی است";
    }

    if (!formData.password) {
      validations.password = " پسورد الزامی است ";
    }

    if (formData.password !== formData.passrepeat) {
      validations.passrepeat = "گذرواژه‌ها با هم مطابقت ندارند";
    }

    if (!formData.passrepeat) {
      validations.passrepeat = "تکرار پسورد الزامی است";
    }

    if (Object.keys(validations).length > 0) {
      setErrors(validations);
      return;
    }

    const response = await axios.post("http://localhost:3000/users", formData);
    console.log("aded :", response.data);
    setFormData({
      name: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
      
    });
    setErrors({});
    setIsEmailExist(false);
    navigate("/login");
  };

  return (
    <div className="mt-40 mb-40 ">
      <div className="container">
        {!isLogin ? (
          <form
            onSubmit={handleSubmit}
            action=""
            className="max-w-[30rem] min-h-72  p-4 mx-auto shadow-personal rounded-md dark:bg-zinc-600 dark:text-white"
          >
            <h3>حساب کاربری</h3>

            <input
              className="w-full bg-slate-200 p-2 mt-4 rounded-md dark:bg-zinc-400"
              type="text"
              name="name"
              id="firstname"
              placeholder="نام"
              value={formData.name || ""}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}

            <input
              className="w-full bg-slate-200 p-2 rounded-md mt-4 dark:bg-zinc-400"
              type="text"
              placeholder="نام خانوادگی"
              id="lastname"
              value={formData.lastname || ""}
              name="lastname"
              onChange={handleChange}
            />

            {errors.lastname && (
              <p className="text-red-500">{errors.lastname}</p>
            )}

            <input
              className="w-full bg-slate-200 p-2 rounded-md mt-4 dark:bg-zinc-400 "
              type="email"
              name="email"
              id="email"
              placeholder=" ایمیل"
              value={formData.email || ""}
              onChange={handleChange}
            />

            {errors.email && <p className="text-red-500">{errors.email}</p>}

            <input
              className="w-full bg-slate-200 p-2 rounded-md mt-4 dark:bg-zinc-400"
              type="number"
              name="phone"
              id="phone"
              placeholder="شماره موبایل(اختیاری)"
              value={formData.mobile || ""}
              onChange={handleChange}
            />

            {errors.mobile && <p className="text-red-500">{errors.mobile}</p>}

            <input
              type="password"
              name="password"
              id="pass"
              placeholder="گذرواژه"
              className="w-full bg-slate-200 p-2 rounded-md mt-4 dark:bg-zinc-400"
              value={formData.password || ""}
              onChange={handleChange}
            />

            {errors.pass && <p className="text-red-500">{errors.pass}</p>}

            <input
              type="password"
              name="passrepeat"
              id=""
              placeholder="تکرار گذرواژه"
              className="w-full bg-slate-200 p-2 rounded-md mt-4 dark:bg-zinc-400"
              onChange={handleChange}
              value={formData.passrepeat || ""}
            />

            {errors.passrepeat && (
              <p className="text-red-500">{errors.passrepeat}</p>
            )}

            <div className="flex justify-start items-center mt-4 gap-x-8 ">
              <button
                type="submit"
                className="bg-orange-400 py-2 px-8 w-3/4 rounded-md "
              >
                ثبت نام
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsLogin(true);
                  // مقداردهی مناسب به ورودی‌ها برای ورود
                  setFormData({
                    name: "",
                    lastname: "",
                    email: "",
                    mobile: "",
                    password: "",
                    
                  });
                  navigate('/login')
                }}
                className="text-blue-500 dark:text-white underline"
              >
                ورود
              </button>
            </div>
          </form>
        ) : (
          <Login formData={formData} setFormData={setFormData} setIsLogin={setIsLogin} handleChange={handleChange} />
        )}
      </div>
    </div>
  );
}
