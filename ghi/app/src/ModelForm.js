import React, { useEffect, useState } from 'react';

function ModelForm() {
    const [manufacturers, setManufacturers] = useState([]);
    const [modelName, setModelName] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');
    const [manufacturer, setManufacturer] = useState('');


    const handleModelNameChange = (event) => {
        const value = event.target.value;
        setModelName(value);
    }

    const handlePictureUrlChange = (event) => {
        const value = event.target.value;
        setPictureUrl(value);
    }

    const handleManufacturerChange = (event) => {
        const value = event.target.value;
        setManufacturer(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.name = modelName;
        data.picture_url = pictureUrl;
        data.manufacturer = manufacturer;
        console.log(data);

        const ManufacturerUrl = 'http://localhost:8100/api/manufacturers/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(ManufacturerUrl, fetchConfig);
        if (response.ok) {
            const newShoe = await response.json();
            console.log(newShoe);

            setModelName('');
            setPictureUrl('');
            setManufacturer('');
        }
      }

      const fetchData = async () => {
        const url = 'http://localhost:8100/api/manufacturers/';

        const response = await fetch(url);

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
              <h1>Add a shoe!</h1>
              <form onSubmit={handleSubmit} id="create-bin-form">
              <div className="form-floating mb-3">
                  <input onChange={handleManufacturerChange} placeholder="Manufacturer" required type="text" name="manufacturer" id="manufacturer" className="form-control" value={manufacturer}/>
                  <label htmlFor="model_name">Manufacturer</label>
                </div>
                <div className="form-floating mb-3">
                  <input onChange={handleModelNameChange} placeholder="Model Name" required type="text" name="model_name" id="model_name" className="form-control" value={modelName}/>
                  <label htmlFor="model_name">Model Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input onChange={handleColorChange} placeholder="Color" required type="text" name="color" id="color" className="form-control" value={color}/>
                  <label htmlFor="color">Color</label>
                </div>
                <div className="form-floating mb-3">
                  <input onChange={handlePictureUrlChange} placeholder="Picture URL" required type="text" name="picture_url" id="picture_url" className="form-control" value={pictureUrl}/>
                  <label htmlFor="picture_url">Picture URL</label>
                </div>
                <div className="mb-3">
                  <select onChange={handleBinChange} required name="bin" id="shoe_bin" className="form-select" value={shoe_bin}>
                    <option value="">Choose a Bin</option>
                    {manufacturers.map(bin => {
                      return (
                          <option key={bin.href} value={bin.href}>
                              {bin.closet_name}
                          </option>
                      );
                    })}
                  </select>
                </div>
                <button className="btn btn-primary">Add!</button>
              </form>
            </div>
          </div>
        </div>
      );

}

export default ModelForm;
