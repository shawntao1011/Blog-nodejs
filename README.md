# BLOG program
This program is mainly for self-learning.

## Package
-  express: a front end framework, mainly used for rendering website, router switch, and providing middle ware.
- art-template: a file type used for webiste design
- bcryptjs: package for data encryption
- mongoose: package to interact with mongodb
- body-parser: package to parse data

## Tech
- ajax: tech to improve website using experience
- css: method to build webiste in a more module way
- cookie: to send data to server, mainly for login function

# Program struction

Document and folders under the home dir are:

1. middleware/
2. model/
3. public/
4. route/
5. views/
6. app.js
7. hash.js
8. joi.js
9. package.json

## middleware/
This folder contains necessary middleware.

loginGuard: to prevent admin users  to visit other pages if they are not login status.

## model/
This folder contains js files to interact with mongodb.

connect: to connect to mongodb
user: to create schema and CRUD data into mongodb.

## public/

admin/: docs for admin-related pages

home/: docs for client pages


## route/

admin/: second router functions 
admin: js file to manage routers under admin/

home: js file to manage routers under home/


## views/
common/: folder that contains common part of the second router under admin/

.art: art files for rendering webiste

## app.js
the main program. 

To start the program, excute the following command line:

```shell
nodemon app.js
```

## hash.js 
js file to test encrypt function

## joi.js
js file to test the data validation function

# Blog description:
This is a blog program with necessary utilities including:

1. Blog administrator management functions
2. Blog user sign in and registration 
3. Blog article visualization
4. More user-friendly interaction(ajax)

utilities to be realized:
1. save data into mongodb atlas, not local mongodb.

