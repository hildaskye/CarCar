import React, { useEffect, useState } from 'react';

function SaleForm() {
    const [autos, setAutos] = useState([])
    const [salespeople, setSalespeople] = useState([])
    const [customers, setCustomers] = useState([])
    const [price, setPrice] = useState('');
    const [auto, setAuto] = useState('');
    const [salesperson, setSalesperson] = useState('');
    const [customer, setCustomer] = useState('');


    const handlePriceChange = (event) => {setPrice(event.target.value)};
    const handleAutoChange = (event) => {setAuto(event.target.value)};
    const handleSalespersonChange = (event) => {setSalesperson(event.target.value)};
    const handleCustomerChange = (event) => {setCustomer(event.target.value)};

    const handleSend = async (event) => {
        event.preventDefault();
        const data = {};
        data.price = price;
        data.automobile = auto;
        data.salesperson = salesperson;
        data.customer = customer;
        console.log(data)

        const SaleUrl = "http://localhost:8090/api/sales/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(SaleUrl, fetchConfig);
        if (response.ok) {
            setPrice('');
            setAuto('');
            setSalesperson('');
            setCustomer('');
        }
    }

    const fetchData = async () => {
        const AutoResponse = await fetch('http://localhost:8100/api/automobiles/');
        const SalespeopleResponse = await fetch('http://localhost:8090/api/salespeople/');
        const CustomerResponse = await fetch('http://localhost:8090/api/customers/');
        if (AutoResponse.ok && SalespeopleResponse.ok && CustomerResponse.ok) {
            const adata = await AutoResponse.json();
            const sdata = await SalespeopleResponse.json();
            const cdata = await CustomerResponse.json();

            setAutos(adata.autos);
            setSalespeople(sdata.salespeople);
            setCustomers(cdata.customers);
        }
    }


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a Sale</h1>
                    <form onSubmit={handleSend} id="create-sale-form">
                        <div className="form-floating mb-3">
                            <input onChange={handlePriceChange} placeholder="Price" required type="number" name="price" id="price" className="form-control" value={price} />
                            <label htmlFor="price">Price</label>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleAutoChange} required name="auto" id="auto" className="form-select" value={auto}>
                                <option value="">Select an Auto</option>
                                {autos.map(auto => {
                                    return (
                                        <option key={auto.id} value={auto.vin}>
                                            {auto.vin}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleSalespersonChange} required name="salesperson" id="salesperson" className="form-select" value={salesperson}>
                                <option value="">Select a Salesperson</option>
                                {salespeople.map(salesperson => {
                                    return (
                                        <option key={salesperson.id} value={salesperson.id}>
                                            {salesperson.first_name} {salesperson.last_name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleCustomerChange} required name="customer" id="customer" className="form-select" value={customer}>
                                <option value="">Select a Customer</option>
                                {customers.map(customer => {
                                    return (
                                        <option key={customer.id} value={customer.id}>
                                            {customer.first_name} {customer.last_name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <button className="btn btn-primary">Add Sale</button>
                    </form>
                </div>
            </div>
        </div>
    );

}

 export default SaleForm;
