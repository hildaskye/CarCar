from django.contrib import admin

from .models import Technician, Appointment, AutomobileVO


admin.site.register(AutomobileVO)
admin.site.register(Appointment)
admin.site.register(Technician)
