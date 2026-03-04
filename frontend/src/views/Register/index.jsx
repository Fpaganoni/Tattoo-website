import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import axios from "axios";
import { toast } from "sonner";
const apiUrl = import.meta.env.VITE_API_URL;

// SVG Eye icons — no emojis
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

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const passwordValue = watch("password");

  const sendData = (data) => {
    axios
      .post(`${apiUrl}/users/register`, data)
      .then(() => {
        toast.success("User registered successfully");
        navigate("/home");
        reset();
      })
      .catch((error) => {
        const backMsj = error.response?.data?.error || "Unknown error";
        toast.error(backMsj);
        throw new Error(backMsj);
      });
  };

  return (
    <div className={styles.containerSingupForm}>
      {/* Decorative tattoo images — desktop only */}
      <img
        className={`${styles.tattos} ${styles.tattosInk}`}
        src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/tatto-ink.png?updatedAt=1755811307193"
        width={220}
        alt=""
        aria-hidden="true"
      />
      <img
        className={`${styles.tattos} ${styles.tattosbird}`}
        src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/tatto-bird.png?updatedAt=1755811307343"
        width={220}
        alt=""
        aria-hidden="true"
      />
      <img
        className={`${styles.tattos} ${styles.tattosHeart}`}
        src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/tatto-heart.png?updatedAt=1755811307216"
        width={220}
        alt=""
        aria-hidden="true"
      />
      <img
        className={`${styles.tattos} ${styles.tattosSkull}`}
        src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/tatto-skull.png?updatedAt=1755811307725"
        width={220}
        alt=""
        aria-hidden="true"
      />

      <form className={styles.singupForm} onSubmit={handleSubmit(sendData)}>
        <h2 className={styles.formTitle}>Create Account</h2>
        <p className={styles.formSubtitle}>
          Join Tattoo Studio and book your first session
        </p>

        {/* Row 1: Name + Username */}
        <div className={styles.formGrid}>
          <label className={styles.labelsForm}>
            Name
            <input
              type="text"
              className={styles.formInputs}
              placeholder="James Smith"
              {...register("name", {
                required: "Name is required",
                maxLength: { value: 30, message: "Max 30 characters" },
                validate: (v) => v.trim() !== "" || "Name cannot be empty",
              })}
            />
            {errors.name && (
              <span className={styles.errorMsj}>{errors.name.message}</span>
            )}
          </label>

          <label className={styles.labelsForm}>
            Username
            <input
              type="text"
              className={styles.formInputs}
              placeholder="JSmith21"
              {...register("username", {
                required: "Username is required",
                maxLength: 30,
                validate: (v) => v.trim() !== "" || "Username cannot be empty",
              })}
            />
            {errors.username && (
              <span className={styles.errorMsj}>{errors.username.message}</span>
            )}
          </label>
        </div>

        {/* Row 2: Email + Birthday */}
        <div className={styles.formGrid}>
          <label className={styles.labelsForm}>
            Email
            <input
              type="email"
              className={styles.formInputs}
              placeholder="james@gmail.com"
              {...register("email", {
                required: "Email is required",
                validate: (v) =>
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v) ||
                  "Invalid email format",
              })}
            />
            {errors.email && (
              <span className={styles.errorMsj}>{errors.email.message}</span>
            )}
          </label>

          <label className={styles.labelsForm}>
            Birthday
            <input
              type="text"
              className={styles.formInputs}
              placeholder="1990/08/07"
              {...register("birthday", {
                required: "Birthday is required",
                maxLength: 10,
                validate: (v) =>
                  /^(19\d{2}|200\d|201\d|202[0-5])\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])$/.test(
                    v,
                  ) || "Use YYYY/MM/DD format",
              })}
            />
            {errors.birthday && (
              <span className={styles.errorMsj}>{errors.birthday.message}</span>
            )}
          </label>
        </div>

        {/* Row 3: Password + Confirm Password */}
        <div className={styles.formGrid}>
          <label className={styles.labelsForm}>
            <span
              className={styles.passwordToggle}
              onClick={() => setShowPassword((p) => !p)}
            >
              Password
              {showPassword ? <EyeOpen /> : <EyeClosed />}
            </span>
            <input
              type={showPassword ? "text" : "password"}
              className={styles.formInputs}
              placeholder="••••••••"
              {...register("password", {
                required: "Password is required",
                maxLength: 15,
                validate: (v) =>
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[^\s]{8,}$/.test(
                    v,
                  ) || "Min 8 chars, upper, lower, number & symbol",
              })}
            />
            {errors.password && (
              <span className={styles.errorMsj}>{errors.password.message}</span>
            )}
          </label>

          <label className={styles.labelsForm}>
            <span
              className={styles.passwordToggle}
              onClick={() => setShowConfirm((p) => !p)}
            >
              Confirm Password
              {showConfirm ? <EyeOpen /> : <EyeClosed />}
            </span>
            <input
              type={showConfirm ? "text" : "password"}
              className={styles.formInputs}
              placeholder="••••••••"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (v) =>
                  v === passwordValue || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <span className={styles.errorMsj}>
                {errors.confirmPassword.message}
              </span>
            )}
          </label>
        </div>

        {/* Row 4: DNI (full width) */}
        <label className={styles.labelsForm}>
          ID / Passport
          <input
            type="text"
            className={styles.formInputs}
            placeholder="40.125.381"
            {...register("dni", {
              required: "ID is required",
              maxLength: 10,
              validate: (v) => v.length >= 7 || "Must be at least 7 characters",
            })}
          />
          {errors.dni && (
            <span className={styles.errorMsj}>{errors.dni.message}</span>
          )}
        </label>

        <div className={styles.containerButtonsForm}>
          <button
            type="button"
            className={styles.buttonsForm}
            onClick={() => reset()}
          >
            Clear
          </button>
          <button
            className={styles.buttonsForm}
            type="submit"
            disabled={!isValid}
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
