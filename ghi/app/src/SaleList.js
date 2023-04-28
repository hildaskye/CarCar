import React, { useEffect, useState } from 'react';


function SaleList() {

    const [sales, setSales] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const saleUrl = 'http://localhost:8090/api/sales/'
            const response = await fetch(saleUrl);
            if (response.ok) {
                const data = await response.json();
                setSales(data.sales);
            }
        }
        getData();
    }, []);

    return (
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
                    {sales.map(sale => {
                        return (
                            <tr key={sale.automobile.vin}>
                                <td>{sale.salesperson.first_name} {sale.salesperson.last_name}</td>
                                <td>{sale.price}</td>
                                <td>{sale.customer.first_name} {sale.customer.last_name}</td>
                                <td>{sale.automobile.vin}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

    )




}

export default SaleList;
