Fullstack Developer Take-home Coding Test
1. Consider a simple application with one entity named property agent who handles
multiple rental properties. Each property has 1 or more tenants belonging to a single
family. An agent also creates some notes and reminders for him/herself to help perform
certain actions on the property such as maintenance, pest control, etc.
2. This exercise is to build a full stack application using Typescript. The application should
have the following:
a. Present a relational data model of the application, identifying all the tables,
constraints and relationships. (this can be a handwritten document you can scan
or you can use a ER diagramming tool)
b. A REST API in typescript which allows for the CRUD operations on the Property
Agent entity.
i. Store all data in memory instead of adding a database support.
ii. The attributes for the property agent could be: id, firstName,
lastName, email, mobileNumber
iii. There should also be two additional attributes in the table to capture
creation and updation timestamp
iv. Stretch Goal: Identify one improvement which we have not explicitly
provided in these requirements, but you think is important to include. We
will talk about that in the interactive session.
c. A Vue based web client which can allow for:
i. upserting a single Agent: Provide a Form for inputting the values and a
HTTP request to the backend
ii. listing/viewing all/single: Only show the HTTP request using a tool such
as Postman (or curl)
iii. deletion single Agent: Only show the HTTP request using a tool such as
Postman (or curl)
iv. During the interactive session, we will discuss what type of error handling
is required and where should that happen: on the FE or the BE.

Please create a repository for this assignment, on Github or Gitlab, and share with us.
Use the commit history to help us understand how you went about building the application in
smaller and meaningful increments.

Overall, you should spend no more than 6 hours on the assignment.
