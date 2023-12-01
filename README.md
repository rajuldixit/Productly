# Productly

## This project is a slice of an e-commerce app, where user can view the products and interact

### About the project

#### Onloading the application, user can view the product cards, card shows product's information such as name, description and also has a button to add/remove

### Interactions

#### On click description text in the card, the respective product's description will be shown and can be hidden on the text click

#### After clicking Add to cart button, UI updates and shows Remove from cart button and vice versa

### Folder Structure

#### Pages ( Product )

#### Components ( ProductCard )

#### Context (ProductContext)

#### Hooks (UseCart, UseAddAndRemoveProduct)

#### Lib (ProductsApi)

#### Utils (Interfaces, constants)

### Steps to run

#### Clone the application by using command : git clone https://github.com/rajuldixit/Productly.git

#### Once cloned, it will be in master branch, then change directory to Productly

#### After that install the dependencies by using command : npm install

#### Here I am using json-server so we need to start the json-server for mock data, command : npx json-server --watch database/db.json

#### Once json-server is up, now we can run the app bu using command : npm start


![image](https://github.com/rajuldixit/Productly/assets/17043105/4c237e7a-f052-4d08-b8c9-cb8e162acfdc)
