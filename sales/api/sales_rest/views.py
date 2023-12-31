from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
import requests

from .encoders import (
    SalespersonEncoder,
    CustomerEncoder,
    AutomobileVOEncoder,
    SaleEncoder,
)

from .models import (
    Salesperson,
    Customer,
    AutomobileVO,
    Sale
)


# Create your views here.

@require_http_methods("GET")
def api_list_automobileVOs(request):
    autoVOs = AutomobileVO.objects.all()
    return JsonResponse(
        {"autoVOs": autoVOs},
        encoder=AutomobileVOEncoder,
    )


@require_http_methods(["GET", "POST"])
def api_list_salespeople(request):
    if request.method == "POST":
        try:
            content = json.loads(request.body)
            salesperson = Salesperson.objects.create(**content)
            return JsonResponse(
                salesperson,
                encoder=SalespersonEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Couldn't create a salesperson"}
            )
            response.status_code = 400
            return response
    else:
        try:
            salespeople = Salesperson.objects.all()
            return JsonResponse(
                {"salespeople": salespeople},
                encoder=SalespersonEncoder,
            )
        except:
            response = JsonResponse(
                {"message": "Couldn't Retrieve the Salespeople"}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE"])
def api_fire_salesperson(request, pk):
    try:
        salesperson = Salesperson.objects.get(id=pk)
        salesperson.delete()
        return JsonResponse(
            salesperson,
            encoder=SalespersonEncoder,
            safe=False,
        )
    except Salesperson.DoesNotExist:
        return JsonResponse({"message": "Salesperson not found. You sure you didn't already fire/delete them?"})


@require_http_methods(["GET", "POST"])
def api_list_customers(request):
    if request.method == "POST":
        try:
            content = json.loads(request.body)
            customer = Customer.objects.create(**content)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Couldn't create a customer"}
            )
            response.status_code = 400
            return response
    else:
        try:
            customers = Customer.objects.all()
            return JsonResponse(
                {"customers": customers},
                encoder=CustomerEncoder,
            )
        except:
            response = JsonResponse(
                {"message": "Couldn't retrieve the customers"}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE"])
def api_delete_customer(request, pk):
    try:
        customer = Customer.objects.get(id=pk)
        customer.delete()
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )
    except Customer.DoesNotExist:
        return JsonResponse({"message": "Customer? What customer?"})


@require_http_methods(["POST", "GET"])
def api_make_sale(request):
    if request.method == "POST":
        content = json.loads(request.body)
        try:
            salesperson_id = content["salesperson"]
            salesperson = Salesperson.objects.get(id=salesperson_id)
            content["salesperson"] = salesperson
        except Salesperson.DoesNotExist:
            return JsonResponse({"message": "Invalid Salesperson"})

        try:
            customer_id = content["customer"]
            customer = Customer.objects.get(id=customer_id)
            content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse({"message": "Invalid Customer"})

        try:
            auto_vin = content["automobile"]
            auto = AutomobileVO.objects.get(vin=auto_vin)
            setattr(auto, "sold", True)
            auto.save()
            content["automobile"] = auto
        except AutomobileVO.DoesNotExist:
            return JsonResponse({"message": "Invalid Auto"})

        sale = Sale.objects.create(**content)
        requests.put(
            f"http://inventory-api:8000/api/automobiles/{auto_vin}/",
            data=json.dumps(
            {"sold": "True"}
            ))

        return JsonResponse(
            sale,
            encoder=SaleEncoder,
            safe=False
        )
    else:
        sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SaleEncoder
        )


@require_http_methods(["DELETE"])
def api_delete_sale(request, id):
    try:
        sale = Sale.objects.get(id=id)
        sale.delete()
        return JsonResponse(
            sale,
            encoder=SaleEncoder,
            safe=False
        )
    except Sale.DoesNotExist:
        return JsonResponse({"message": "Sale's either gone or was never here, sis."})


def api_filter_by_salesperson(request, pk):
    sp = Salesperson.objects.get(id=pk)
    print(sp)
    sales = Sale.objects.filter(salesperson=sp)
    print(sales)

    return JsonResponse(
        {"sales": sales},
        encoder=SaleEncoder
    )
