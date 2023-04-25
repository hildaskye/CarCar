import React, { useEffect, useState } from 'react';


function VehicleModelsList() {
    const [models, setModels] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const url = 'http://localhost:8100/api/models'
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setModels(data.models);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Models</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Manufacturer</th>
                        <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {models.map(model => {
                        return (
                            <tr key={model.id}>
                                <td>{ model.name }</td>
                                <td>{ model.manufacturer.name }</td>
                                <td><img src={model.picture_url} width="150" height="120"/></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )

}

export default VehicleModelsList;
