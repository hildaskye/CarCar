import React, { useState } from 'react';

function ManuForm() {
    const [manufacturer, setManufacturer] = useState('');

    const handleManufacturerChange = (event) => {
        const value = event.target.value;
        setManufacturer(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.name = manufacturer;

        const manufacturerUrl = 'http://localhost:8100/api/manufacturers/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(manufacturerUrl, fetchConfig);
        if (response.ok) {
            const newManufacturer = await response.json();
            console.log(newManufacturer);

            setManufacturer('');
        }
      }

    return (
    <div className="row">
        <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
            <h1>Create a Manufacturer</h1>
            <form onSubmit={handleSubmit} id="create-manufacturer-form">
            <div className="form-floating mb-3">
                <input onChange={handleManufacturerChange} placeholder="Manufacturer" required type="text" name="manufacturer" id="manufacturer" className="form-control" value={manufacturer}/>
                <label htmlFor="model_name">Manufacturer</label>
            </div>
            <button className="btn btn-primary">Create!</button>
            </form>
        </div>
        </div>
    </div>
    );

}

export default ManuForm;
