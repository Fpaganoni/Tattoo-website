import styles from "./Login.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { toast } from "sonner";
const apiUrl = import.meta.env.VITE_API_URL;

const EyeOpen = () => (
  <svg
    className={styles.eyeIcon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeClosed = () => (
  <svg
    className={styles.eyeIcon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

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
        toast.success("Login successful");
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
        toast.error(error.response?.data?.message || "Login failed");
      });
  };

  return createPortal(
    <div className={styles.generalContainer}>
      <form className={styles.loginContainer} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.containerTitle}>
          <button
            className={styles.buttonClose}
            onClick={handleOnClose}
            type="button"
            aria-label="Close"
          >
            ✕
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
            <span onClick={togglePassword} className={styles.passwordToggle}>
              Password {showPassword ? <EyeOpen /> : <EyeClosed />}
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
    </div>,
    document.body,
  );
};

export default Login;
