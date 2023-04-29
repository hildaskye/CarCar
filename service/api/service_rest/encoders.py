from common.json import ModelEncoder

from .models import Appointment, AutomobileVO, Technician


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "first_name",
        "last_name",
        "employee_id",
        "id",
    ]


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
    ]


class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "date_time",
        "reason",
        "status",
        "vin",
        "customer",
        "technician",
        "id",
    ]
    encoders = {
        "technician": TechnicianEncoder(),
        "vin": AutomobileVOEncoder(),
        }
