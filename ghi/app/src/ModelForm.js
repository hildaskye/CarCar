import React, { useEffect, useState } from 'react';

function ModelForm() {
    const [manufacturers, setManufacturers] = useState([]);
    const [modelName, setModelName] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');
    const [manufacturer_id, setManufacturer] = useState('');


    const handleModelNameChange = (event) => {setModelName(event.target.value)};
    const handlePictureUrlChange = (event) => {setPictureUrl(event.target.value)};
    const handleManufacturerChange = (event) => {setManufacturer(event.target.value)};

    const handleSend = async (event) => {
        event.preventDefault();
        const data = {};
        data.name = modelName;
        data.picture_url = pictureUrl;
        data.manufacturer_id = manufacturer_id;

        const ModelUrl = 'http://localhost:8100/api/models/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(ModelUrl, fetchConfig);
        if (response.ok) {
            setModelName('');
            setPictureUrl('');
            setManufacturer('');
        }
    }

    const fetchData = async () => {
        const response = await fetch('http://localhost:8100/api/manufacturers/');

        if (response.ok) {
            const data = await response.json();
            setManufacturers(data.manufacturers);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a Model</h1>
                    <form onSubmit={handleSend} id="create-bin-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleModelNameChange} placeholder="Model Name" required type="text" name="model_name" id="model_name" className="form-control" value={modelName} />
                            <label htmlFor="model_name">Model Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handlePictureUrlChange} placeholder="Picture URL" required type="text" name="picture_url" id="picture_url" className="form-control" value={pictureUrl} />
                            <label htmlFor="picture_url">Picture URL</label>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleManufacturerChange} required name="manufacturer" id="manufacturer_id" className="form-select" value={manufacturer_id}>
                                <option value="">Select a Manufacturer</option>
                                {manufacturers.map(manufacturer => {
                                    return (
                                        <option key={manufacturer.id} value={manufacturer.id}>
                                            {manufacturer.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <button className="btn btn-primary">Add Model</button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default ModelForm;
