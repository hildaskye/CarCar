from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .encoders import (
    SalespersonEncoder,
    CustomerEncoder,
    AutomonileVOEncoder,
    SaleEncoder,
)

from .models import (
    Salesperson,
    Customer,
    AutomobileVO,
    Sale
)


# Create your views here.

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
