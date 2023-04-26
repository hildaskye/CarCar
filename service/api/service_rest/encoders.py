from common.json import ModelEncoder

from .models import Appointment, AutomobileVO, Technician


class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "first_name",
        "last_name",
        "employee_id",
    ]


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
    ]


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "date_time",
        "reason",
        "status",
        "vin",
        "customer",
        "technician",
    ]
