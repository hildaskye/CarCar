# CarCar

Team:

* Clarisse Alvarez - Automobile Service
* Dylan Winn - Auto Sales

## Design

To get started, you will need Docker already installed. Clone the project and run the following commands:

>docker volume create beta-data
docker-compose build
docker-compose up

You may see a warning about an environment variable "OS" being missing if running this on a Mac. If so, you can ignore it.

(Diagram here)

This project includes multiple docker containers running simultaneously together, and building off eachother, to create a fully-functioning application. They are as follows:
database-1 is as it sounds, it runs the actual database everything gets data from.
react-1 runs the Graphical User Interface (GUI) and is where all the front-end information can be accessed.
>inventory-api-1 runs the inventory API on port 8100.
sales-api-1 runs the sales API on port 8090.
service-api-1 runs the service API on port 8080.
service-poller-1 runs a poller for the service API. This updates once per minute and allows service information to stay updated across all services.
sales-poller-1 runs a poller for the sales API. This updates once per minute and allows sales information to stay updated across all services.

Inventory is the main monolith, with the Sales and Service services coming off it.
Inventory runs in the inventory-api-1 container on port 8100. While everything is running, you can do the following:

### Graphical User Interface:
You can access the Graphical User Interface at http://localhost:3000/. There are dropdowns to make it easy to create:
   ○ Vehicle Manufacturers
   ○ Vehicle Models
   ○ Individual Vehicles
   ○ Salespeople
   ○ Customers
   ○ And the ability to record sales.


>**Please note:** In order to create a sale, you need at least one vehicle, one customer, and one salesperson.
In order to create vehicles, you need at least one model.
In order to create a model, you need at least one manufacturer.


Additionally, you can also view any created:
   ○ Manufacturers
   ○ Models
   ○ Vehicles
   ○ Technicians
   ○ Appointments
   ○ Salespeople
   ○ Customers
   ○ All Sales
   ○ Sales filtered by Salesperson

You can also do all of these things via API.

### API

#### For Manufacturers:
Create or List manufacturers at http://localhost:8100/api/manufacturers/ via POST and GET, respectively
Edit, Delete, or View individual manufacturers at 	http://localhost:8100/api/manufacturers/id/ where "id" is the ID of the item in the database via PUT, DELETE, or GET, respectively
   To create a manufacturer, all you need is a name. Here is an example POST to create a manufacturer:
   `>{"name": "Toyota"}`


#### For Models:
Create or List models at http://localhost:8100/api/models/ via POST and GET, respectively
Edit, Delete, or View individual models at http://localhost:8100/api/models/id/ where "id" is the ID of the item in the database via PUT, DELETE, or GET, respectively
   To create a model, you must first have at least one manufacturer created. Here is an example POST to create a model:
   >`{
	"name": "Yaris",
	"picture_url": "https://img2.carmax.com/img/vehicles/mmy-toyota-yaris-2013/1.jpg",
	"manufacturer_id": 1
}`


#### For Automobiles:
Create or List automobiles at http://localhost:8100/api/automobiles/ via POST and GET, respectively
Edit, Delete, or View individual automobiles at http://localhost:8100/api/automobiles/id/ where "id" is the ID of the item in the database via PUT, DELETE, or GET, respectively
   To create an automobile, you must have first created a model (and therefore, a manufacturer). Here is an example POST to create an automobile:
   `{
	"color": "White",
	"year": 2012,
	"vin": "1B3D5F7H9J1L3N5P7",
	"model_id": 1
}`



## Service microservice
The Service microservice docker containers are:
service-api-1 which runs the service API on port 8080 and service-poller-1 which runs a poller for the service API. This updates once per minute and allows service information to stay updated across all services.

Technicians:

Create or List Technicians at http://localhost:8080/api/technicians/ using POST and GET API endpoints. Delete a specific Technician at http://localhost:8080/api/technicians/id/ replacing the id with the specific technician id using DELETE API endpoint. The GET and DELETE endpoints do not require a body however the POST request does require a JSON body.


The first step is to create a Technician. After creating a new HTTP request, choose the POST option from the dropdown, enter the following url: http://localhost:8080/api/technicians/ in the url field, select JSON from the body dropdown field and enter the JSON body below into the empty field. Send the request using the SEND button next to the URL field and the new technician will be created.

The following is an example of the JSON body to be included with a POST request:
{
	"first_name": "Bob",
	"last_name": "Smith",
	"employee_id": "1011"
}

After creating a technician, there will be data to produce when listing technicians. The GET request does not require a body. Create a new HTTP request and choose GET from the dropdown options. Enter http://localhost:8080/api/technicians/ in the URL field and hit SEND. A list of technicians will populate in the Preview Field.

To delete a Technician create a new HTTP request and choose DELETE from the dropdown. Enter http://localhost:8080/api/technicians/id in the URL field. Replace the id at the end of the URL with the technician id whom you wish to delete.

Appointments:

Create or List Appointments at http://localhost:8080/appointments/ using POST and GET API endpoints. Delete a specific appointment at http://localhost:8080/api/appointments/id/ replacing the id with the specific appointment id using the DELETE API endpoint. The GET and DELETE endpoints do not require a body however the POST request deos require a JSON body.

The first step is to create an Appointment. After creating a new HTTP request, choose the POST option from the dropdown, enter the following url: http://localhost:8080/appointments/ and enter the JSON body below into the empty field. Send the request using the SEND button next to the URL field and the new appointment will be created.

The following is an example of the JSON body to be included with a POST request:
{
	"date_time": "2023-04-28T01:35:41+00:00",
	"reason": "broken door latch",
	"status": "Pending",
	"vin": "1NNNN777888886",
	"customer": "Bill Jones",
	"technician": "8"
}

After creating an appointment, there will be data to produce when listing appointments. The GET request does not require a body. Create a new HTTP request and choose GET from the dropdown options. Enter http://localhost:8080/api/appointments/ in the URL field and hit SEND. A list of appointments will populate in the Preview Field.

To delete an Appointment create a new HTTP request and choose DELETE from the dropdown. Enter http://localhost:8080/api/appointments/id in the URL field. Replace the id at the end of the URL with the appointment id of the appointment you wish to delete.


## Sales microservice

For the Sales Microservice, you can do all of the following via API:

○ List all Salespeople at http://localhost:8090/api/salespeople/
○ List all Customers at http://localhost:8090/api/customers/
○ List all sales at http://localhost:8090/api/sales/

○Create a salesperson via POST request at http://localhost:8090/api/sales/. The format should be:
`{
	"first_name": "John",
	"last_name": "Smith",
	"employee_id": "12345"
}`

○Create a customer via POST request at http://localhost:8090/api/customers/. For this, the format should be:
`{
	"first_name": "Elmo",
	"last_name": "Monster",
	"address": "123 Sesame St",
	"phone_number": "1234567890"
}`

○Create a sale via POST request at http://localhost:8090/api/sales/. For this, the format should be:
`{
	"price": "17000",
	"automobile": "1234567890ABCDEF",
	"salesperson": "1",
	"customer": "1"
}`
**Note**: You may notice the salesperson and customer are numbers, not names. These are the customer and salesperson IDs, which you can retrieve using the list functions for each type of person.

○Delete a salesperson via DELETE request at http://localhost:8090/api/salespeople/id
○Delete a customer at http://localhost:8090/api/customers/id
○Delete a sale at http://localhost:8090/api/customers/id
**Note**: To delete anything via API, replace "id" in the url with the ID obtainable via the list functions.

○ Additionally, I have added the ability to view all sales by a single Salesperson via GET request at http://localhost:8090/api/salespeople/id/sales/
