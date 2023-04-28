from django.urls import path

from .views import (
    api_list_salespeople,
    api_fire_salesperson,
    api_list_customers,
    api_delete_customer,
    api_make_sale,
    api_delete_sale,
    api_list_automobileVOs
)

urlpatterns = [
    path("salespeople/", api_list_salespeople, name="api_list_salespeople"),
    path("salespeople/<int:pk>/", api_fire_salesperson, name="api_fire_salesperson"),
    path("customers/", api_list_customers, name="api_list_customers"),
    path("customers/<int:pk>/", api_delete_customer, name="api_delete_customer"),
    path("sales/", api_make_sale, name="api_make_sale"),
    path("sales/<int:id>/", api_delete_sale, name="api_delete_sale"),
    path("autovos/", api_list_automobileVOs, name="api_list_automobileVOs")

]
