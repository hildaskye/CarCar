import React, { useState } from 'react';

function CustomerForm() {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phone_number, setPhoneNumber] = useState('');


    const handleFirstNameChange = (event) => {setFirstName(event.target.value)};
    const handleLastNameChange = (event) => {setLastName(event.target.value)};
    const handleAddressChange = (event) => {setAddress(event.target.value)};
    const handlePhoneNumberChange = (event) => {setPhoneNumber(event.target.value)};


    const handleSubmit = async (event) => {
        event.preventDefault();
        const customer = {};
        customer.first_name = first_name;
        customer.last_name = last_name;
        customer.address = address;
        customer.phone_number = phone_number;
        console.log(customer)

        const url = 'http://localhost:8090/api/customers/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(customer),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            setFirstName('');
            setLastName('');
            setAddress('');
            setPhoneNumber('');
        };
        console.log(response)
    }


    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a Customer</h1>
                    <form onSubmit={handleSubmit} id="create-customer-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleFirstNameChange} placeholder="First Name" required type="text" name="first_name" id="first_name" className="form-control" value={first_name} />
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleLastNameChange} placeholder="Last Name" required type="text" name="last_name" id="last_name" className="form-control" value={last_name} />
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleAddressChange} placeholder="Address" required type="text" name="address" id="address" className="form-control" value={address} />
                            <label htmlFor="address">Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handlePhoneNumberChange} placeholder="Phone Number" required type="number" name="phone_number" id="phone_number" className="form-control" value={phone_number} />
                            <label htmlFor="address">Phone Number</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default CustomerForm;
