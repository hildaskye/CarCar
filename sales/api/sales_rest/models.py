from django.db import models


# Create your models here.
class Salesperson(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    employee_id = models.PositiveIntegerField()


class Customer(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    address = models.CharField(max_length=100)
    phone_number = models.PositiveIntegerField()


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17)


class Sale(models.Model):
    price = models.IntegerField(max_length=7)
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="sale",
        on_delete=models.CASCADE
    )
    salesperson = models.ForeignKey(
        Salesperson,
        related_name="sale",
        on_delete=models.CASCADE
    )
    customer = models.ForeignKey(
        Customer,
        related_name="sale",
        on_delete=models.CASCADE
    )
