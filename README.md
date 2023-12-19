problem to solve (48 hours)

It's required to create a system that allows the contact book management in a system. This management is related to allow the creation, reading, updating and deletion of the contact book (CRUD). The requirement includes: 

-create a relational database(MySQL, mariaDB, postgreSQL) with all the required tables for it's management 
-create the persistence layer using an ORM (sequelize)
-create a project REST API that implements the 4 methods for the contact book management, the API must have a set of layers 

Model: 

-open the folder "modelo" and load the SQL file
-credentials are usuario: 'root', contraseña: ''

Controller:

-open two powershell windows, change directory to the folder "controlador"
-in the first window, run "tsc -w" (real-time typescrypt compiler)
-then, in the second window, run npm run start (controller)

vista: 

-open vscode, change directory to the folder "vista"
-run "npm start"
