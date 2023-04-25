import React, { useEffect, useState } from 'react';

function CarForm() {
    const [models, setModels] = useState([]);
    const [color, setColor] = useState('');
    const [year, setYear] = useState('');
    const [vin, setVin] = useState('');
    const [model_id, setModel] = useState('');


    const handleColorChange = (event) => {setColor(event.target.value)};
    const handleYearChange = (event) => {setYear(event.target.value)};
    const handleVinChange = (event) => {setVin(event.target.value)};
    const handleModelChange = (event) => {setModel(event.target.value)};

    const handleSend = async (event) => {
        event.preventDefault();
        const data = {};
        data.color = color;
        data.year = year;
        data.vin = vin;
        data.model_id = model_id;
        console.log(data)

        const AutoUrl = "http://localhost:8100/api/automobiles/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(AutoUrl, fetchConfig);
        if (response.ok) {
            setColor('');
            setYear('');
            setVin('');
            setModel('');
        }
    }

    const fetchData = async () => {
        const response = await fetch('http://localhost:8100/api/models/');

        if (response.ok) {
            const data = await response.json();
            setModels(data.models);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a Car</h1>
                    <form onSubmit={handleSend} id="create-bin-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleColorChange} placeholder="Color" required type="text" name="color" id="color" className="form-control" value={color} />
                            <label htmlFor="color">Color</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleYearChange} placeholder="Year" required type="number" name="year" id="year" className="form-control" value={year} />
                            <label htmlFor="year">Year</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleVinChange} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control" value={vin} />
                            <label htmlFor="year">VIN</label>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleModelChange} required name="model" id="model" className="form-select" value={model_id}>
                                <option value="">Select a Model</option>
                                {models.map(model => {
                                    return (
                                        <option key={model.id} value={model.id}>
                                            {model.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <button className="btn btn-primary">Add Car</button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default CarForm;
