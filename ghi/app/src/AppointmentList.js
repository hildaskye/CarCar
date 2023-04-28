import React, { useEffect, useState } from 'react';


function AppointmentList() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'http://localhost:8080/api/appointments/'
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setAppointments(data.appointments);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Service Appointments</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                            <th>Date & Time</th>
                            <th>Reason</th>
                            <th>VIN</th>
                            <th>Customer</th>
                            <th>Technician</th>
                            <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment => {
                        return (
                            <tr key={appointment.id}>
                                <td>{ appointment.date_time }</td>
                                <td>{ appointment.reason }</td>
                                <td>{ appointment.auto.vin }</td>
                                <td>{ appointment.customer }</td>
                                <td>{ appointment.technician }</td>
                                <td>{ appointment.status }</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

    )




}

export default AppointmentList;
