# APP.MEISU
PROJECT: DESIGN AND IMPLEMENT WEBSITE TO MANAGE AND TRACK THE TRANSACTION ACTIVITIES OF MEISUEDISON COMPANY

BACKGROUND
Meisuedison Company is a monetary company that provides services such momo transactions and has partnered with some of the prestigious banks (Ecobank, Fidelity bank, Calbank and more) to service its costumers of any money transactions. This company also has two embedded limited namely Summit micro-finance limited and Lutech limited which provides loans and a Susu savings services to its customers respectively. It currently have three branches at these places namely Aiyinasi, Bogoso, Prestea.

PROBLEM STATEMENT
Meisuedison Company, a dynamic organization engaged in various business transactions, lacks an efficient system to manage and track its transaction activities. Current processes are manual, leading to inefficiencies, data inaccuracies, and delays. The current way of assessing and tracking its transaction activities is by calling the teller of a particular branch to send his or her transaction file(in excel file) at that particular time of the day. To address these challenges and enhance operational effectiveness, there is a critical need for the design and implementation of a comprehensive website. The objective is to create a centralized platform that streamlines transaction management, provides real-time tracking, and ensures data accuracy for Meisuedison Company. Note, the actual transactions are made using applications from these banks and companies and the data is then stored accordingly on the proposed website to enable assessing and tracking it in real-time.


PROJECT OBJECTIVES
1.	Implement a real-time tracking system to provide instant insights into ongoing transaction activities.
2.	Create a centralized platform for easy access to transaction data, facilitating collaboration among authorized personnel.
3.	Implement secure user authentication and authorization mechanisms to control access to sensitive transaction information.

USER TYPES
1.	Ordinary users (Tellers). These are basically the Tellers. Theoretically, they are ones that the customers attend to make their transactions.
2.	The super user (transaction processor). This is the individual that actually makes the transaction. Collects the customer’s transaction information from teller (s) and process the transaction using the type of transaction’s (momo, Ecobank, fidelity, calbank) application (mtn partner for momo, Xpress for ecobank, Fidelity app, calbank app) respectively.
3.	The Admin. Since this application is internally going to be used by those users mentioned above, these is no user registration required so therefore the admin is the only user to add , delete and assign the user-type(teller or transaction processor).

DATA ENTITIES
The data entities that will be managed by this proposed system are the users, transaction records and entries of all the tellers at their respected branch and payment type and the all the records and entries of the users.

DATA ATTRIBUTES
For all users, their login attributes are username and password. Both the tellers and super user have the same login form so the system will distinguish between these two users to land him/her at the right webpage(s).
For the transactions, we currently have 4 and one of ways data will be stored is by the transaction type (payment type).
For the branches, we have 3 branches for now and it’s also one of data will be stored based on that (Aiyinase, Bogoso, Prestea). For all these branches, there are at less two tellers (ordinary users).
Others like “Initial balance (that very day)”, “Number of costumers (that very day)”, “Amounted deposited (that very day), “Amount Transferred (that very day)” and “Total Current Balance (that very day)” are also a way data are displayed to users.

DATA RELATIONS
There are relationships between the data stored in the database. For instances, relations between transaction types (payment type) and the branches.

DATA VALIDATION
For example, the payment form requires the payment type, contact (for momo) or account number (bank), name of the beneficial and amount (only in numbers).
This helps storing data at the right table.

ENDPOINT AND API DESIGN 
On this point, the Admin will create (add user), delete user, assign role (teller or super user) and also download or view data from a teller (or all) on a particular payment type (or all) and at a particular branch (or all).
The super user will put (input information), download or view his/her data on a particular payment type (or all) and at a particular branch (or all), download or view data from a teller on a particular payment type (or all) and at a particular branch (or all) and edit already input information (if any mistake is made on a specific costumer’s information).
The ordinary user (teller) will put (input information), download or view his/her data on a particular payment type (or all) and edit already input information (if any mistake is made on a specific costumer’s information). 
