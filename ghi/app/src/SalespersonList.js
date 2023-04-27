import React, { useEffect, useState } from 'react';


function SalespersonList() {

    const [salespeople, setSalespeople] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const salespersonUrl = 'http://localhost:8090/api/salespeople/'
            const response = await fetch(salespersonUrl);
            if (response.ok) {
                const data = await response.json();
                setSalespeople(data.salespeople);
            }
        }
        getData();
    }, []);

    return (
        <div>
            <h1>Salespeople</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Employee ID</th>

                    </tr>
                </thead>
                <tbody>
                    {salespeople.map(salesperson => {
                        return (
                            <tr key={salesperson.employee_id}>
                                <td>{salesperson.first_name} {salesperson.last_name}</td>
                                <td>{salesperson.employee_id}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

    )




}

export default SalespersonList;
