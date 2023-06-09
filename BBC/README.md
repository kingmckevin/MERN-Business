# MERN BBC

# Lessons

1. Introduction
2. Install Tools
3. Create React App
4. Create Git Repository
5. List Products
   1. create products array
   2. add product images
   3. render products
   4. style products
6. Add routing
   1. npm i react-router-dom
   2. create route for home screen
   3. create router for product screen
7. Create Node.JS server
   1. run npm init in root folder
   2. Update package.json set type: module
   3. Add .js to imports
   4. npm install express
   5. create server.js
   6. add start command as node backend/server.js
   7. require express
   8. create route for / return backend is ready
   9. move products.js from frontend to backend
   10. create route for /api/products
   11. return products
   12. run npm start
8. Fetch Products from backend
   1. set proxy in package.json
   2. npm install axios
   3. use state hook
   4. use effect hook
   5. use reducer hook
9. Manage State by Reducer Hook
   1. Define reducer
   2. update fetch data
   3. get state from useReducer
10. Add Bootstrap UI Framework
    i. npm install react-bootstrap bootstrap
    ii. update App.js
11. Create product and rating component
    i. create rating component
    ii. create product component
    iii. use rating component in product component
12. Create Product details screen
    i. fetch product from backend
    ii. create 3 columns for image, info and action
13. Create Loading and Message Component
    i. create loading component
    ii. use spinner component
    iii. create message component
    iv. create utils.js to define getError function
14. Implement Add to Cart
    i. Create React Context
    ii. define reducer
    iii. create store provider
    iv. implement add to cart button click handler
15. Complete Add To Cart
    i. check exist item in the cart
    ii. check count in stock in backend
16. Create Cart Screen
    i. create 2 columns
    ii. display items list
    iii. create action column
17. Complete Cart Screen
    i. click handler for inc/dec item
    ii. click handler for remove item
    iii. click handler for checkout
18. Create Signin Screen
    i. create sign in form
    ii. add email and password
    iii. add signin button
19. Connect To MongoDB Database
    i. create atlas mongodb database
    ii. install local mongodb database
    iii. npm install mongoose
    iv. connect to mongodb database
20. Seed Sample Data
    i. create Product Model
    ii. create User Model
    iii. create seed route
    iv. use route in server.js
    v. seed sample product
21. Seed Sample Users
    i. create user Model
    ii. seed sample users
    iii. create user routes
