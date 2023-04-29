import React, { useEffect, useState } from 'react';

function SalespersonHistory() {
    const [salespeople, setSalespeople] = useState([]);
    const [salesperson, setSalesperson] = useState('');
    const [sales, setSales] = useState([]);

    const handleSalespersonChange = (event) => {
        setSalesperson(event.target.value);
    };

    const fetchSalespeople = async () => {
        const SalespeopleResponse = await fetch(
            'http://localhost:8090/api/salespeople/'
        );
        if (SalespeopleResponse.ok) {
            const sdata = await SalespeopleResponse.json();
            setSalespeople(sdata.salespeople);
        }
    };

    useEffect(() => {
        fetchSalespeople();
    }, []);

    useEffect(() => {
        if (salesperson) {
            const getSales = async () => {
                let saleUrl = `http://localhost:8090/api/salespeople/${salesperson}/sales/`;
                const response = await fetch(saleUrl);
                if (response.ok) {
                    const data = await response.json();
                    setSales(data.sales);
                }
            };
            getSales();
        }
        else { setSales([]); }
    }, [salesperson]);

    return (
        <>
            <select onChange={handleSalespersonChange} required name="salesperson" label="Salesperson" id="salesperson" className="form-select" value={salesperson}>
                <option value="">Select a Salesperson</option>
                {salespeople.map((salesperson) => {
                    return (
                        <option key={salesperson.id} value={salesperson.id}>
                            {salesperson.first_name} {salesperson.last_name}
                        </option>
                    );
                })}
            </select>
            <div>
                <h1>Sales</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Salesperson</th>
                            <th>Sale Price</th>
                            <th>Customer</th>
                            <th>Auto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map((sale) => {
                            return (
                                <tr key={sale.id}>
                                    <td>
                                        {sale.salesperson.first_name} {sale.salesperson.last_name}
                                    </td>
                                    <td>{sale.price}</td>
                                    <td>
                                        {sale.customer.first_name} {sale.customer.last_name}
                                    </td>
                                    <td>{sale.automobile.vin}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default SalespersonHistory;
