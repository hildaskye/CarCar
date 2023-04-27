from django.db import models


# Create your models here.
class Salesperson(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    employee_id = models.PositiveIntegerField()

    def __str__(self):
        return self.first_name + " " + self.last_name


class Customer(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    address = models.CharField(max_length=100)
    phone_number = models.PositiveIntegerField()

    def __str__(self):
        return self.first_name + " " + self.last_name


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return f"{self.vin}"


class Sale(models.Model):
    price = models.IntegerField()
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

    def __str__(self):
        return f"Sale of {self.automobile.vin} to {self.customer}"
