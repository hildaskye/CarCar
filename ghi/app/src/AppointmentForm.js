import React, { useState } from 'react';

function AppointmentForm() {
    const [date, setDate] = useState('');
    const handleDateChange = (event) => {setDate(event.target.value)};

    const [time, setTime] = useState('');
    const handleTimeChange = (event) => {setTime(event.target.value)};

    const [reason, setReason] = useState('');
    const handleReasonChange = (event) => {setReason(event.target.value)};

    const [status, setStatus] = useState('');
    const handleStatusChange = (event) => {setStatus(event.target.value)};

    const [vin, setVin] = useState('');
    const handleVinChange = (event) => {setVin(event.target.value)};

    const [customer, setCustomer] = useState('');
    const handleCustomerChange = (event) => {setCustomer(event.target.value)};

    const [technician, setTechnician] = useState('');
    const handleTechnicianChange = (event) => {setTechnician(event.target.value)};

    const handleSubmit = async (event) => {
        event.preventDefault();
        const appointment = {};
        appointment.date = date;
        appointment.time = time;
        appointment.reason = reason;
        appointment.status = status;
        appointment.vin = vin;
        appointment.customer = customer;
        appointment.technician = technician;

        const url = 'http://localhost:8080/api/technicians/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(appointment),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            setDate('');
            setTime('');
            setReason('');
            setStatus('');
            setVin('');
            setCustomer('');
            setTechnician('');
        };
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a Service Appointment</h1>
                    <form onSubmit={handleSubmit} id="create-appointment-form">
                    <div className="form-floating mb-3">
                            <input onChange={handleVinChange} placeholder="Vin" required type="text"
                            name="vin" id="vin" className="form-control" value={vin} />
                            <label htmlFor="vin">Automobile VIN</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleCustomerChange} placeholder="Customer" required type="text"
                            name="customer" id="customer" className="form-control" value={customer} />
                            <label htmlFor="customer">Customer</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleDateChange} placeholder="Date" required type="text"
                            name="date" id="date" className="form-control" value={date} />
                            <label htmlFor="date">Date</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleTimeChange} placeholder="Time" required type="text"
                            name="time" id="time" className="form-control" value={time} />
                            <label htmlFor="time">Time</label>
                        </div>
                                                <div className="form-floating mb-3">
                            <input onChange={handleTechnicianChange} placeholder="Technician" required type="text"
                            name="technician" id="technician" className="form-control" value={technician} />
                            <label htmlFor="technician">Technician</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleReasonChange} placeholder="Reason" required type="text"
                            name="reason" id="reason" className="form-control" value={reason} />
                            <label htmlFor="reason">Reason</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );


}

export default AppointmentForm;
