import styles from "./Appointments.module.css";
import axios from "axios";

const AppointmentCard = ({ appointment, onCancelStatus }) => {
  const handleCancelAppointment = () => {
    const confirmed = confirm(
      "Are you sure you want to cancel this appointment?"
    );

    confirmed;

    if (confirmed) {
      console.log("Cancel appointment clicked", appointment.appointmentID);
      axios
        .put(
          `http://localhost:3000/appointments/cancel/${appointment.appointmentID}`
        )
        .then(() => {
          onCancelStatus(appointment.appointmentID);
        });
    }
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.infoContainer}>
        <p>Date: {appointment.appointmentDate}</p>
        <p>At: {appointment.appointmentTime}</p>
        <p>{appointment.status}</p>

        {appointment.status === "ACTIVE" ? (
          <button
            className={styles.buttonCancelled}
            onClick={handleCancelAppointment}
          >
            Cancel appointment
          </button>
        ) : (
          <span className={styles.cancelledSpan}>Appointment Cancelled</span>
        )}
      </div>
    </div>
  );
};

export default AppointmentCard;
