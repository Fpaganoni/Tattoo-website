// import mockAppointments from "../../helpers/appointments";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import AppointmentCard from "../../components/AppointmentCard/index";
import styles from "./MyAppointments.module.css";
import axios from "axios";
import AppoinmentModal from "../../components/AppointmentModal/index";
const apiUrl = import.meta.env.VITE_API_URL;

const MyAppointments = () => {
  const [myAppointments, setMyAppointments] = useState([]);

  const { user } = useContext(AuthContext);

  const handleAddAppointment = (newAppointment) => {
    setMyAppointments((prev) => [...prev, newAppointment]);
  };

  const handleCancelStatus = (appointmentID) => {
    setMyAppointments((prev) =>
      prev.map((appoint) =>
        appoint.appointmentID === appointmentID
          ? { ...appoint, status: "CANCELLED" }
          : appoint
      )
    );
  };

  const id = user?.user?.userID;

  useEffect(() => {
    axios
      .get(`${apiUrl}/appointments/${id}`)
      .then((res) => setMyAppointments(res.data))
      .catch((error) => {
        console.error("Error fetching appointments:", error);
      });
  }, [id]);

  return (
    <div className={styles.cardsContainer}>
      <AppoinmentModal onAddAppointment={handleAddAppointment} />

      {myAppointments.length == 0 ? (
        <h1 className={styles.myAppointmentsTitle}>NO APPOINTMENTS YET</h1>
      ) : (
        <h1 className={styles.myAppointmentsTitle}>MY APPOINTMENTS</h1>
      )}

      <div className={styles.cards}>
        {myAppointments.map((appointment) => {
          return (
            <AppointmentCard
              key={appointment.appointmentID}
              appointment={appointment}
              onCancelStatus={handleCancelStatus}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyAppointments;
