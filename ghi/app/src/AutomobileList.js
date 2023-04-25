import React, { useEffect, useState } from 'react';


function AutomobileList() {

    const [autos, setAutomobiles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'http://localhost:8100/api/automobiles/'
            const response = await fetch(url);
            console.log(response);
            if (response.ok) {
                const data = await response.json();
                setAutomobiles(data.autos);
                console.log(data.autos);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Automobiles</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Color</th>
                        <th>Year</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                        <th>Sold</th>
                    </tr>
                </thead>
                <tbody>
                    {autos.map(auto => {
                        return (
                            <tr key={auto.id}>
                                <td>{ auto.vin }</td>
                                <td>{ auto.color }</td>
                                <td>{ auto.year }</td>
                                <td>{ auto.model.name }</td>
                                <td>{ auto.model.manufacturer.name }</td>
                                <td>{ auto.sold.toString() }</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

    )




}

export default AutomobileList;
