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




Explain your models and integration with the inventory
microservice, here.
 Your README should contain instructions for how to run your application. This should
 include at minimum the commands to bring up your containers (ie. docker-compose up)
 and any other steps that need to be taken for proctors to grade your projects
 Fork the project from the repository, and run the following commands
    Run docker-compose up to bring up the containers using Docker. Navigate to localhost:3000 in the browser.


 Your README should also include the following:
 ○   A Simple Diagram of the Architecture

 ■   What’s running where?
 ■   Indicate what the bounded contexts and value objects are
 ○   Explicitly define the urls and ports for each of the microservices
 ○   A list of the CRUD routes for each of your resources
 ■   Think of this as the instructions for someone new to your project to gather
 an understanding of how to interact with your resources.
 ■   Provide specific URLS that can be added to insomnia once the
 application is running locally.
 ■   Provide sample POST data
 ■   Provide expected response data for each route.
 ■   all models are named and described  (this could be a use case, list of
 fields, some communication of why it exists)
 ○   Identify the value objects as well as:
 ■   Why they are needed.
 ■   How they are implemented because of why they’re needed.
 ●   What does all of this about the README mean?
 ○   Spend some time on your README
 ○   It’s not the notes for your project
 ■   Don’t leave git merge notes
 ■   Or what you did on a specific commit, that’s what git is for
 ■   Don’t leave instructions you followed in the README.

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
