from common.json import ModelEncoder
from .models import Salesperson, Customer, AutomobileVO, Sale


class SalespersonEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        "first_name",
        "last_name",
        "employee_id",
        "id",
    ]


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "first_name",
        "last_name",
        "address",
        "phone_number",
    ]


class AutomonileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin"
    ]


class SaleEncoder(ModelEncoder):
    model = Sale
    peoperties = [
        "price",
        "automobile",
        "salesperson",
        "customer",
    ]
