from django.urls import path

from .views import (
    api_list_salespeople,
    api_fire_salesperson
)

urlpatterns = [
    path("salespeople/", api_list_salespeople, name="api_list_salespeople"),
    path("salespeople/<int:pk>/", api_fire_salesperson, name="api_fire_salesperson"),
]
