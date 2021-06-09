import React, {useState, useEffect} from 'react';
import Form from '../Form';
import Appointment from '../Appointment';
import './lists.css'
import PropTypes from 'prop-types';

const Lists = () => {


    let lsAppointments = JSON.parse(localStorage.getItem('appoinments'));

    if(!lsAppointments) {
        lsAppointments = [];
    }

    const [appointments, setAppointments] = useState(lsAppointments);

    useEffect( () => {
        let lsAppointments = JSON.parse(localStorage.getItem('appoinments'));

        if(lsAppointments) {
            localStorage.setItem('appointments', JSON.stringify(appointments))
        }else{
            localStorage.setItem('appointments', JSON.stringify([]))
        }
    }, [appointments]);
 
    // Add Appointments
    const createAppointment = appointment => {
        setAppointments([
            ...appointments,
            appointment
        ])
    }

    // Delete appointment
    const deleteAppointment = (id) => {
        const newappointments = appointments.filter(appointment => appointment.id !== id );
        setAppointments(newappointments);
    }

    const title = appointments.length === 0 ? 'No existen turnos' : 'Turnos pendientes';
    return(
    <>
        <div className="container-lists">

            <div className="container container-form">
                <Form
                createAppointment={createAppointment}
                />
            </div>

            <div className="container container-appointment">
                <h2>{title}</h2>
                {appointments.map(appointment => (
                <Appointment
                key={appointment.id}
                appointment={appointment}
                deleteAppointment={deleteAppointment}
                />
                ))}
            </div>
        </div>
    </>
    );
}


Form.propTypes = {
    createAppointment: PropTypes.func.isRequired
}

export default Lists;