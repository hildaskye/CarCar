import React, { useState } from 'react';

function TechnicianForm() {
    const [first_name, setFirstName] = useState('');
    const handleFirstNameChange = (event) => {setFirstName(event.target.value)};

    const [last_name, setLastName] = useState('');
    const handleLastNameChange = (event) => {setLastName(event.target.value)};

    const [employee_id, setEmployeeID] = useState('');
    const handleIDChange = (event) => {setEmployeeID(event.target.value)};



    const handleSubmit = async (event) => {
        event.preventDefault();
        const technician = {};
        technician.first_name = first_name;
        technician.last_name = last_name;
        technician.employee_id = employee_id;

        const url = 'http://localhost:8080/api/technicians/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(technician),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            setFirstName('');
            setLastName('');
            setEmployeeID('');

        };
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add Technician</h1>
                    <form onSubmit={handleSubmit} id="create-technician-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleFirstNameChange} placeholder="First Name" required type="text" name="first_name" id="first_name" className="form-control" value={first_name} />
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleLastNameChange} placeholder="Last Name" required type="text" name="last_name" id="last_name" className="form-control" value={last_name} />
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleIDChange} placeholder="Employee ID" required type="number" name="employee_id" id="employee_id" className="form-control" value={employee_id} />
                            <label htmlFor="employee_id">Employee ID</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default TechnicianForm;

