from django.db import models
from django.urls import reverse


class Technician(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.IntegerField()

    def get_api_url(self):
        return reverse("api_technicians", kwargs={"pk": self.id})


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)

    def get_api_url(self):
        return reverse("api_automobile", kwargs={"vin": self.vin})


class Appointment(models.Model):
    date_time = models.DateTimeField()
    reason = models.TextField()
    status = models.CharField(max_length=10)
    vin = models.ForeignKey(AutomobileVO, on_delete=models.CASCADE)
    customer = models.CharField(max_length=100)
    technician = models.ForeignKey(
        Technician,
        related_name="technician",
        on_delete=models.CASCADE,
    )
