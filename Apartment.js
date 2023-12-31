/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */


//Swagger

//To register admin
/**
 * @swagger
 * /registeradmin:
 *   post:
 *     summary: Register a new admin
 *     tags: [Admin]
 *     description: Register a new admin with the provided credentials.
 *     requestBody:
 *       description: Admin details for registration
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username of the admin.
 *               password:
 *                 type: string
 *                 description: The password of the admin.
 *               role:
 *                 type: string
 *                 description: The role of the admin.
 *             required:
 *               - username
 *               - password
 *               - role
 *     responses:
 *       200:
 *         description: Admin registered successfully.
 *       500:
 *         description: Internal Server Error.
 */

//Login Admin
/**
 * @swagger
 * /AdminLogin:
 *   post:
 *     summary: Admin Login
 *     tags: [Admin]
 *     description: Log in as an admin with the provided credentials.
 *     requestBody:
 *       description: Admin credentials for login
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username of the admin.
 *               password:
 *                 type: string
 *                 description: The password of the admin.
 *             required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: Successfully logged in.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Status:
 *                   type: string
 *                   example: "Login Successful!"
 *                 token:
 *                   type: string
 *                   example: "your_generated_token_here"
 *       401:
 *         description: Invalid username or password.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Status:
 *                   type: string
 *                   example: "Invalid username or password"
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Status:
 *                   type: string
 *                   example: "Internal Server Error"
 */
 

//register user
/**
 * @swagger
 * /registerUser:
 *   post:
 *     summary: Register a new user 
 *     tags: [User]
 *     description: Register a new user with the provided credentials.
 *     requestBody:
 *       description: User details for registration
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username of the user.
 *               password:
 *                 type: string
 *                 description: The password of the user.
 *               role:
 *                 type: string
 *                 description: The role of the user.
 *             required:
 *               - username
 *               - password
 *               - role
 *     responses:
 *       200:
 *         description: User registered successfully.
 *       500:
 *         description: Internal Server Error.
 */


//Swagger for login user
/**
 * @swagger
 * /loginUser:
 *   post:
 *     summary: Log in a user
 *     tags: [User]
 *     description: Logs in a user with the provided credentials.
 *     requestBody:
 *       description: User credentials for login
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username of the user.
 *               password:
 *                 type: string
 *                 description: The password of the user.
 *             required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: Successfully logged in.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Status:
 *                   type: string
 *                   example: "Login Successful!"
 *                 token:
 *                   type: string
 *                   example: "your_generated_token_here"
 *       401:
 *         description: Invalid username or password.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Status:
 *                   type: string
 *                   example: "Invalid username or password"
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Status:
 *                   type: string
 *                   example: "Internal Server Error"
 */



//swagger to register visitor
/**
 * @swagger
 * /registervisitor:
 *   post:
 *     summary: Register a new visitor (User access only)
 *     tags: [User]
 *     description: Register a new visitor with the provided details.
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       description: Visitor details for registration
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                 type: string
 *                 description: The name of the visitor.
 *               Phone_Number:
 *                 type: string
 *                 description: The phone number of the visitor.
 *               Address:
 *                 type: string
 *                 description: The address of the visitor.
 *               Floor_Wing:
 *                 type: string
 *                 description: The floor and wing details.
 *               Whom_to_meet:
 *                 type: string
 *                 description: The person whom the visitor intends to meet.
 *               Reason_to_meet:
 *                 type: string
 *                 description: The reason for the visit.
 *             required:
 *               - Name
 *               - Phone_Number
 *               - Address
 *               - Floor_Wing
 *               - Whom_to_meet
 *               - Reason_to_meet
 *     responses:
 *       200:
 *         description: Visitor registered successfully.
 *       403:
 *         description: Forbidden - Insufficient privileges.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Forbidden: Insufficient privileges"
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error"
 */
           



 /** 
 * @swagger
 * /viewvisitor:
 *   get:
 *     summary: View visitor information (Admin & User access)
 *     tags: [Admin]
 *     description: Retrieve information about visitors. Requires authentication.
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Visitor information retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The unique identifier of the visitor.
 *                   Name:
 *                     type: string
 *                     description: The name of the visitor.
 *                   Phone_Number:
 *                     type: string
 *                     description: The phone number of the visitor.
 *                   Address:
 *                     type: string
 *                     description: The address of the visitor.
 *                   Floor_Wing:
 *                     type: string
 *                     description: The floor and wing information.
 *                   Whom_to_meet:
 *                     type: string
 *                     description: The person whom the visitor intends to meet.
 *                   Reason_to_meet:
 *                     type: string
 *                     description: The reason for the visit.
 *     401:
 *       description: Unauthorized - Token is missing or invalid.
 *       content:
 *         application/json:
 *           example:
 *             message: Unauthorized
 *     500:
 *       description: Internal Server Error.
 *       content:
 *         application/json:
 *           example:
 *             message: An error occurred while retrieving visitor information.
 */

//Swagger for view all users (admin only)

/**
 * @swagger
 * /viewuser:
 *   get:
 *     summary: View user information (Admin access only)
 *     tags: [Admin]
 *     description: Retrieve information about users. Requires authentication.
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: User information retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   username:
 *                     type: string
 *                     description: The username of the user.
 *                   password:
 *                     type: string
 *                     description: The password of the user.
 *                   role:
 *                     type: string
 *                     description: The role of the user.
 *     403:
 *       description: Forbidden - Insufficient privileges (requires admin role).
 *       content:
 *         application/json:
 *           example:
 *             message: Forbidden, Insufficient privileges
 *     500:
 *       description: Internal Server Error.
 *       content:
 *         application/json:
 *           example:
 *             message: An error occurred while retrieving user information.
 */

//Swagger for Update visitor detail
/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update Visitor information (User access only)
 *     tags: [User]
 *     description: Update details of visitor. Requires authentication role.
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the visitor to update.
 *         required: true
 *         schema:
 *            type: string
 *     requestBody:
 *       description: Updated Visitor details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                 type: string
 *                 description: The updated Name of the visitor.
 *               Phone_Number:
 *                 type: string
 *                 description: The updated phone number of the visitor.
 *               Address:
 *                 type: string
 *                 description: The updated address of the visitor.
 *               Floor_Wing:
 *                 type: string
 *                 description: The updated floor wing.
 *               Whom_to_meet:
 *                 type: string
 *                 description: The updated whom to meet.
 *               Reason_to_meet:
 *                 type: string
 *                 description: The updated reason to meet.
 *     responses:
 *       200:
 *         description: User updated successfully.
 *       403:
 *         description: Forbidden - Insufficient privileges (requires admin role).
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Forbidden: Insufficient privileges"
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error"
 */

/**
 * @swagger
 * /DeleteVisitor/{id}:
 *   delete:
 *     summary: Delete visitor data (User access only)
 *     tags: [User]
 *     description: Delete data of a visitor. Requires authentication and admin role.
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the visitor data to delete.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Visitor data deleted successfully.
 *       403:
 *         description: Forbidden - Insufficient privileges (requires admin role).
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Forbidden: Insufficient privileges"
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "An error occurred while deleting the visit detail"
 */


//Swagger for issue pass
/**
 * @swagger
 * /issuePass:
 *   post:
 *     summary: Issue a visitor pass (User access only)
 *     tags: [User]
 *     description: Issue a pass to a visitor. Requires authentication.
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       description: Pass details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               visitorName:
 *                 type: string
 *                 description: The name of the visitor.
 *               passType:
 *                 type: string
 *                 description: The type of pass to be issued.
 *     responses:
 *       200:
 *         description: Visitor pass issued successfully.
 *       403:
 *         description: Forbidden - Insufficient privileges (requires admin role).
 *       404:
 *         description: Visitor not found.
 *       500:
 *         description: Internal Server Error.
 */

//swagger for visitor to retrieve pass
/**
 * @swagger
 * /retrievePass/{visitorName}:
 *   get:
 *     summary: Retrieve visitor pass details (Visitor access)
 *     tags: [Visitor]
 *     description: Retrieve details of a visitor's pass by providing the visitor's name.
 *     parameters:
 *       - in: path
 *         name: visitorName
 *         description: The name of the visitor.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Visitor pass details retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 visitorId:
 *                   type: string
 *                   description: The identifier of the visitor.
 *                 passType:
 *                   type: string
 *                   description: The type of pass issued.
 *                 issuedBy:
 *                   type: string
 *                   description: The username who issued the pass.
 *                 issueDate:
 *                   type: string
 *                   format: date-time
 *                   description: The date and time when the pass was issued.
 *       404:
 *         description: Visitor pass not found.
 *       500:
 *         description: Internal Server Error.
 */