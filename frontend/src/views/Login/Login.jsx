import styles from "./Login.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;

const Login = ({ handleOnClose, onLoginSucces }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  const { setUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    axios
      .post(`${apiUrl}/users/login`, data)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        alert("Login successful");
        setUser({
          login: true,
          ...res.data,
        });

        if (onLoginSucces) {
          onLoginSucces();
          navigate("/home");
        } // Close login modal

        reset();
      })
      .catch((error) => {
        alert("Login failed", error.response?.message || error.message);
      });
  };

  return (
    <div className={styles.generalContainer}>
      <form className={styles.loginContainer} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.containerTitle}>
          <button className={styles.buttonClose} onClick={handleOnClose}>
            X
          </button>
          <h3 className={styles.title}>Login</h3>
        </div>

        <div className={styles.labelsContainer}>
          <label className={styles.labelsLogin}>
            Email
            <input
              type="email"
              className={styles.inputsLogin}
              placeholder="example@gmail.com"
              {...register("email", {
                required: "Email is required",
                validate: (value) => {
                  const regex =
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                  return regex.test(value) || "Invalid email format";
                },
              })}
            />
            {errors.email && (
              <span className={styles.errorMsj}>{errors.email.message}</span>
            )}
          </label>

          <label className={styles.labelsLogin}>
            <span onClick={togglePassword}>
              Password {showPassword ? "👁️" : "🙈"}
            </span>

            <input
              type={showPassword ? "text" : "password"}
              className={styles.inputsLogin}
              placeholder="********"
              {...register("password", {
                required: "Password is required",
                validate: (value) => {
                  return value.trim() !== "" || "Password cannot be missing";
                },
              })}
            />
            {errors.password && (
              <span className={styles.errorMsj}>{errors.password.message}</span>
            )}
          </label>
        </div>

        <div className={styles.buttonsContainer}>
          <button
            type="submit"
            className={styles.buttonLogin}
            disabled={!isValid}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
