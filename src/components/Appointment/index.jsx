import React from 'react';
import './appointment.css';
import PropTypes from 'prop-types';
const Appointment = ({appointment: {firstname, lastname, dni, date, time, additionalobservation, id}, deleteAppointment}) => {
    return (
        <>
            <div className="appointment">
                <p>Nombre: {firstname} {lastname}</p>
                <p>DNI: {dni}</p>
                <p>Fecha: {date}</p>
                <p>Hora: {time}</p>
                <p>Observacion: {additionalobservation}</p>
                <div className="container-btn">
                    <button
                    type="button"
                    className="btn-delete"
                    onClick={() => deleteAppointment(id)}
                    >Eliminar</button>
                </div>
            </div>
        </>
    )
}

Appointment.propTypes = {
    appointment: PropTypes.object.isRequired,
    deleteAppointment: PropTypes.func.isRequired
}

export default Appointment;