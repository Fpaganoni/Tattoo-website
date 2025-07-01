import { useForm } from "react-hook-form";
import styles from "./AppointmentModal.module.css";
import axios from "axios";
// import { format } from "date-fns"; // Import format from date-fns for date formatting

const AppointmentModal = ({ onAddAppointment }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.user?.userID;
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  const handleOnSubmit = (data) => {
    const appointmentData = {
      ...data,
      userID: userId,
      status: "ACTIVE",
    };

    axios
      .post("http://localhost:3000/appointments/schedule", appointmentData)
      .then((res) => {
        alert("Appointment scheduled successfully");
        console.log("Appointment scheduled:", res.data);
        onAddAppointment(res.data);
        reset();
      });
    console.log("Appointmentsubmitted:", appointmentData);
  };

  return (
    <div className={styles.generalContainer}>
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className={styles.appointmentModalContainer}
      >
        <h2 className={styles.appointmentModalTitle}>Get your appointment</h2>

        <label className={styles.newAppLabel}>
          Appointment Date
          <input
            className={styles.newAppInput}
            type="date"
            min={today}
            placeholder="2025/09/05"
            {...register("appointmentDate", {
              required: "This field is required",
              validate: (value) => {
                const regex = /^\d{4}\/\d{2}\/\d{2}$/;
                return (
                  regex.test(value) || "Invalid date format. Use YYYY/MM/DD."
                );
              },
            })}
          />
          {errors.appointmentDate && (
            <span className={styles.errorMsj}>
              {errors.appointmentDate.message}
            </span>
          )}
        </label>

        <label className={styles.newAppLabel}>
          Appointment Time
          <input
            className={styles.newAppInput}
            type="text"
            placeholder="14:15hs"
            {...register("appointmentTime", {
              required: "This field is required",
              validate: (value) => {
                const regex = /^([01]\d|2[0-3]):([0-5]\d)hs$/;
                return regex.test(value) || "Invalid time format. Use HH:MMhs";
              },
            })}
          />
          {errors.appointmentTime && (
            <span className={styles.errorMsj}>
              {errors.appointmentTime.message}
            </span>
          )}
        </label>

        <button
          type="submit"
          disabled={!isValid}
          className={styles.newAppButton}
        >
          GET APPOINTMENT
        </button>
      </form>
    </div>
  );
};

export default AppointmentModal;
