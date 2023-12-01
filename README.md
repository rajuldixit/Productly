# Productly

## This project is a slice of an e-commerce app, where user can view the products and interact

### About the project

#### Onloading the application, user can view the product cards where card shows product's information such as name, description and also has a button to add/remove

### Interactions

#### On clicking the description text in the card, the respective product's description will be shown and can be hidden by clicking same description text

#### After clicking Add to cart button, the UI updates and shows Remove from cart button and vice versa

### Dependencies

#### axios for data fetching
#### Material UI for styling
#### json-server for mock server

### Folder Structure

#### src folder 

#### App

#### Pages ( Product )

#### Components ( ProductCard )

#### Context ( ProductContext )

#### Hooks ( UseCart, UseAddAndRemoveProduct )

#### Lib ( ProductsApi )

#### Utils ( Interfaces, constants )

### Steps to run

#### We Clone the application by using command : git clone https://github.com/rajuldixit/Productly.git

#### Once cloned, it should be in master branch

####  After that we should change the directory to Productly : cd Productly 

#### After that install the dependencies by using command : npm install

#### Here I am using json-server so we need to start the json-server for mock data, command : npx json-server --watch database/db.json

#### Once json-server is up, now we can run the app by using command : npm start



![image](https://github.com/rajuldixit/Productly/assets/17043105/4c237e7a-f052-4d08-b8c9-cb8e162acfdc)
