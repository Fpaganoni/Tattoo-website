import { useState } from "react";
import styles from "./Appointments.module.css";
import axios from "axios";
import { toast } from "sonner";
import ConfirmationModal from "../ConfirmationModal/index";
const apiUrl = import.meta.env.VITE_API_URL;

const AppointmentCard = ({ appointment, onCancelStatus }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const confirmCancellation = () => {
    axios
      .put(`${apiUrl}/appointments/cancel/${appointment.appointmentID}`)
      .then(() => {
        toast.success("Appointment cancelled");
        onCancelStatus(appointment.appointmentID);
        setShowConfirm(false);
      })
      .catch(() => {
        toast.error("Failed to cancel appointment");
        setShowConfirm(false);
      });
  };

  const isActive = appointment.status === "ACTIVE";

  return (
    <div className={styles.cardContainer}>
      <div className={styles.infoContainer}>
        <div className={styles.infoRow}>
          <span className={styles.infoIcon}>📅</span>
          <span className={styles.infoText}>{appointment.appointmentDate}</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoIcon}>🕐</span>
          <span className={styles.infoText}>{appointment.appointmentTime}</span>
        </div>
      </div>

      <span
        className={`${styles.statusBadge} ${
          isActive ? styles.statusActive : styles.statusCancelled
        }`}
      >
        {isActive ? "● Active" : "✕ Cancelled"}
      </span>

      {isActive ? (
        <button
          className={styles.buttonCancelled}
          onClick={() => setShowConfirm(true)}
        >
          Cancel Appointment
        </button>
      ) : (
        <span className={styles.cancelledSpan}>Session cancelled</span>
      )}

      {showConfirm && (
        <ConfirmationModal
          title="Cancel Appointment"
          message="Are you sure you want to cancel this session? This action cannot be undone."
          onConfirm={confirmCancellation}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </div>
  );
};

export default AppointmentCard;
