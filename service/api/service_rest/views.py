from django.shortcuts import render
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
        
