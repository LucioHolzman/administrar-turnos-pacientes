import React, {useState} from 'react';
import uuid from 'uuid/dist/v4';
import './form.css';
const Form = ({createAppointment}) => {

    // Crear State
    const [appointment, setAppointment] = useState({
        firstname: '', 
        lastname: '', 
        dni: '',
        date: '',
        time: '',
        additionalobservation: ''
    });

    const [error, setError] = useState(false)

    // Actualizar input
    const handleChange = (e) => {
        setAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        })
    }

    // Extraer valores
    const {firstname, lastname , dni , date , time, additionalobservation} = appointment;
    
    // Press confirm
    const submitAppointment = (e) => {
        e.preventDefault();

        // Validate
        if(firstname.trim() === '' || lastname.trim() === '' || dni.trim() === '' || date.trim() === '' || time.trim() === '' || additionalobservation.trim() === ''){
            setError(true)
            return;
        }

        // Validate complete
        setError(false)

        // Assign ID
        appointment.id = uuid();

        // Create appointment
        createAppointment(appointment);
        // Restart Form
        setAppointment({
            firstname: '', 
            lastname: '', 
            dni: '',
            date: '',
            time: '',
            additionalobservation: ''
        })

    }
    return(
    <>
        <div className="form">
            <div className="container-title">
                <h2>Agregar turno</h2>
            </div>
            {
            error ?
            <p>Todos los campos son Obligatorios</p>
            :
            <>
            </>
            }
            <form
            onSubmit={submitAppointment}
            >
                <label htmlFor="">Nombre</label>
                <input 
                autoFocus
                type="text"
                name='firstname'
                onChange={handleChange}
                value={firstname}
                />
                <label htmlFor="">Apellido</label>
                <input 
                type="text"
                name='lastname'
                onChange={handleChange}
                value={lastname}
                />
                <label htmlFor="">DNI</label>
                <input 
                type="text"
                name='dni'
                onChange={handleChange}
                value={dni}
                />
                <label htmlFor="">Fecha</label>
                <input 
                type="date"
                name='date'
                onChange={handleChange}
                value={date}
                />
                <label htmlFor="">Hora</label>
                <input 
                type="time"
                name='time'
                onChange={handleChange}
                value={time}
                />
                <label htmlFor="">Observacion adicional</label>
                <textarea 
                name="additionalobservation" 
                id="" 
                cols="30" 
                rows="10" 
                style={{resize: 'none'}}
                onChange={handleChange}
                value={additionalobservation}
                ></textarea>
                <div className="container-btn">
                    <button
                    type='submit'
                    className='btn'
                    >Confirmar</button>
                </div>
            </form>
        </div>
    </>
    );
}

export default Form;