import React, { useEffect, useState } from 'react';

function ServiceHistoryList() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'http://localhost:8080/api/services'
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setServices(data.services);
            }
        }
        fetchData();
    }, []);


    return (
        <div>
            <h1>Service History</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Is VIP?</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Technician</th>
                        <th>Reason</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map(service => {
                        return (
                            <tr key={service.appointment.id}>
                                <td>{ service.appointment.vin }</td>
                                <td>{ service.appointment.auto}</td>
                                <td>{ service.appointment.customer }</td>
                                <td>{ service.appointment.date }</td>
                                <td>{ service.appointment.time }</td>
                                <td>{ service.appointment.technician }</td>
                                <td>{ service.appointment.reason }</td>
                                <td>{ service.appointment.status }</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )

}

export default ServiceHistoryList;
