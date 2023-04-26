from django.db import models
from django.urls import reverse


class Technician(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.PositiveSmallIntegerField()

    def get_api_url(self):
        return reverse("api_tchnicians", kwargs={"pk": self.id})


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)

    def get_api_url(self):
        return reverse("api_automobile", kwargs={"vin": self.vin})


class Appointment(models.Model):
    date_time = models.DateTimeField(auto_now_add=True)
    reason = models.TextField()
    status = models.CharField(max_length=100)
    vin = models.CharField(max_length=17, unique=True)
    customer = models.CharField(max_length=100)
    technician = models.ForeignKey(
        Technician,
        related_name="appointment",
        on_delete=models.CASCADE,
    )
