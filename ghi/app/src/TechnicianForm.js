import React, { useEffect, useState } from 'react';


function TechnicianForm(props) {
    const [date_time, setDateTime] = useState('');
    const [reason, setReason] = useState('');
    const [status, setStatus] = useState('');
    const [vin, setVin] = useState('');
    const [customer, setCustomer] = useState('');
    const [technician, setTechnician] = useState('');

    const fetchData = async () => {
        const url = 'http://localhost8080/api/appointments/';

    }

}

export default TechnicianForm
