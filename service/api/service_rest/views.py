from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .encoders import (
    TechnicianEncoder,
    AutomobileVOEncoder,
    AppointmentEncoder,
)
from .models import Technician, AutomobileVO, Appointment


@require_http_methods(["GET", "POST"])
def api_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the technician"}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE"])
def api_technician(request, pk):
    if request.method == "DELETE":
        try:
            technician = Technician.objects.get(id=pk)
            technician.delete()
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except Technician.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})


@require_http_methods(["GET", "POST"])
def api_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder,
        )

    else:
        try:
            content = json.loads(request.body)
            appointment = Appointment.objects.create(**content)
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create appointment"}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE"])
def api_appointment(request, pk):
    if request.method == "DELETE":
        try:
            appointment = Appointment.objects.get(id=pk)
            appointment.delete()
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})


@require_http_methods(["PUT"])
def api_cancel_appointment(request, pk):
    if request.method == "PUT":
        try:
            appointment = Appointment.objects.get(id=pk)
            appointment.status = "Canceled"
            appointment.save()
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})


@require_http_methods(["PUT"])
def api_finish_appointment(request, pk):
    if request.method == "PUT":
        try:
            appointment = Appointment.objects.get(id=pk)
            appointment.status = "Finished"
            appointment.save()
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})


@require_http_methods(["GET", "POST"])
def api_automobile_vo(request):
    if request.method == "GET":
        automobile_vos = AutomobileVO.objects.all()
        return JsonResponse(
            {"automobile_vos": automobile_vos},
            encoder=AutomobileVOEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            automobile_vo = AutomobileVO.objects.create(**content)
            return JsonResponse(
                automobile_vo,
                encoder=AutomobileVOEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Does not exist"}
            )
            response.status_code = 400
            return response
