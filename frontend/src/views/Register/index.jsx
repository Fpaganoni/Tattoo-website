import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const sendData = (data) => {
    axios
      .post(`${apiUrl}/users/register`, data)
      .then(() => {
        alert("User registered successfully");

        navigate("/home");
        reset();
      })
      .catch((error) => {
        const backMsj = error.response?.data?.error || "Unknown error";
        alert(backMsj);

        throw new Error(backMsj);
      });
  };

  const togglePassword = () => setShowPassword((prev) => !prev);

  const onSubmit = (data) => {
    sendData(data);
  };

  const handleClearClick = () => {
    reset();
  };

  return (
    <div className={styles.containerSingupForm}>
      <img
        className={`${styles.tattos} ${styles.tattosInk}`}
        src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/tatto-ink.png?updatedAt=1755811307193"
        width={250}
        alt=""
      />
      <img
        className={`${styles.tattos} ${styles.tattosbird}`}
        src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/tatto-bird.png?updatedAt=1755811307343"
        width={250}
        alt="bird tattoo"
      />
      <img
        className={`${styles.tattos} ${styles.tattosHeart}`}
        src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/tatto-heart.png?updatedAt=1755811307216"
        width={250}
        alt="Heart tattoo"
      />
      <img
        className={`${styles.tattos} ${styles.tattosSkull}`}
        src="https://ik.imagekit.io/p2ho5d9bi/Tattoo-website/tatto-skull.png?updatedAt=1755811307725"
        width={250}
        alt="skull tattoo"
      />
      <form className={styles.singupForm} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.labelsForm}>
          Name
          <input
            type="text"
            className={styles.formInputs}
            placeholder="James Smith"
            {...register("name", {
              required: "Name cannot be missing",
              maxLength: { value: 30, message: "max 30 caract." },
              validate: (value) => {
                return value.trim() !== "" || "Name cannot be missing";
              },
            })}
          />
          {errors.name && (
            <span className={styles.errorMsj}>{errors.name.message}</span>
          )}
        </label>

        <label className={styles.labelsForm}>
          Username
          <input
            name="username"
            type="text"
            placeholder="JSmith21"
            className={styles.formInputs}
            {...register("username", {
              required: "Username cannot be missing",
              maxLength: 30,
              validate: (value) => {
                return value.trim() !== "" || "Username cannot be missing";
              },
            })}
          />
          {errors.username && (
            <span className={styles.errorMsj}>{errors.username.message}</span>
          )}
        </label>

        <label className={styles.labelsForm}>
          Email
          <input
            name="email"
            type="email"
            placeholder="james.smith@gmail.com"
            className={styles.formInputs}
            {...register("email", {
              required: "Email cannot be missing",
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

        <label className={styles.labelsForm}>
          Birthday
          <input
            name="birthday"
            type="text"
            placeholder="1990/08/07"
            className={styles.formInputs}
            {...register("birthday", {
              required: "Birthday cannot be missing",
              maxLength: 10,
              validate: (value) => {
                const regex =
                  /^(19\d{2}|200\d|201\d|202[0-5])\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])$/;

                return regex.test(value) || "Invalid date format";
              },
            })}
          />
          {errors.birthday && (
            <span className={styles.errorMsj}>{errors.birthday.message}</span>
          )}
        </label>

        <label className={styles.labelsForm}>
          <span onClick={togglePassword}>
            Password {showPassword ? "🙈" : "👁️"}
          </span>
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="**********"
            className={styles.formInputs}
            {...register("password", {
              required: "Password cannot be missing",
              maxLength: 15,
              validate: (value) => {
                const regex =
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-])[^\s]{8,}$/;
                return (
                  regex.test(value) ||
                  "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character"
                );
              },
            })}
          />
          {errors.password && (
            <span className={styles.errorMsj}>{errors.password.message}</span>
          )}
        </label>

        <label className={styles.labelsForm}>
          Id or Passport
          <input
            name="dni"
            type="text"
            placeholder="21667017"
            className={styles.formInputs}
            {...register("dni", {
              required: "ID cannot be missing",
              maxLength: 10,
              validate: (value) => {
                return value.length >= 7 || "DNI must be at least 7 characters";
              },
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
            onClick={handleClearClick}
          >
            Clear
          </button>
          <button
            className={styles.buttonsForm}
            type="submit"
            disabled={!isValid}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
