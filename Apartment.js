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

//To register admin (public)
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
 *                 description: The role of the admin (should be 'admin').
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

//Login Admin (public)
/**
 * @swagger
 * /AdminLogin:
 *   post:
 *     summary: Login Admin
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
 
//swagger to register security (admin only)
/**
 * @swagger
 * /registersecurity:
 *   post:
 *     summary: Register a new security (Admin access)
 *     tags: [Security]
 *     description: Register a new security with admin privileges. Requires authentication.
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       description: Security details for registration
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username of the security.
 *               password:
 *                 type: string
 *                 description: The password of the security.
 *               role:
 *                 type: string
 *                 description: The role of the security (should be 'security').
 *     responses:
 *       200:
 *         description: Security user registered successfully.
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

//Swagger to login security
/**
 * @swagger
 * /SecurityLogin:
 *   post:
 *     summary: Authenticate a security
 *     tags: [Security]
 *     description: Authenticate a security based on the provided username and password.
 *     requestBody:
 *       description: Security login credentials
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username of the security.
 *               password:
 *                 type: string
 *                 description: The password of the security.
 *     responses:
 *       200:
 *         description: Login successful. Returns a token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Status:
 *                   type: string
 *                   description: Indicates the login status.
 *                   example: "Login Successful!"
 *                 token:
 *                   type: string
 *                   description: The authentication token.
 *       403:
 *         description: Invalid username or password.
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "Invalid username or password"
 */



//register user (security only)
/**
 * @swagger
 * /registerUser:
 *   post:
 *     summary: Register a new user (Security access only)
 *     tags: [User]
 *     description: Register a new user with the specified username, password, and role (Security access).
 *     security:
 *       - BearerAuth: []
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
 *                 description: The username of the new user.
 *               password:
 *                 type: string
 *                 description: The password of the new user.
 *               role:
 *                 type: string
 *                 description: The role of the new user (should be 'user').
 *             required:
 *               - username
 *               - password
 *               - role
 *     responses:
 *       200:
 *         description: User registered successfully.
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


//Swagger for login user (public)
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



//swagger to register visitor (user only)
/**
 * @swagger
 * /registervisitor:
 *   post:
 *     summary: Register a new visitor (User access only)
 *     tags: [Visitor]
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
 *                 description: The floor and wing details of the visitor.
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
           

//view visitor (Security and user only)

 /** 
 * @swagger
 * /viewvisitor:
 *   get:
 *     summary: View visitor information (Security & User access)
 *     tags: [Visitor]
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


 //View all Security (admin only)
/**
 * @swagger
 * /viewsecurity:
 *   get:
 *     summary: View security information (Admin access)
 *     tags: [Security]
 *     description: Retrieve information of all security. Requires authentication and admin role.
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Security information retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   username:
 *                     type: string
 *                     description: The username of the security user.
 *                   password:
 *                     type: string
 *                     description: The password of the security user.
 *                   role:
 *                     type: string
 *                     description: The role of the security user.
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
 *                   example: "An error occurred while retrieving Security information"
 */


//Swagger for view all users (admin and security only)
/**
 * @swagger
 * /viewuser:
 *   get:
 *     summary: View user information (Admin and Security access only)
 *     tags: [User]
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
 *       description: Forbidden - Insufficient privileges (requires admin and security role).
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

//Swagger for Update visitor detail (user only)
/**
 * @swagger
 * /Update/{id}:
 *   put:
 *     summary: Update visitor details by ID (User access only)
 *     tags: [User]
 *     description: Update visitor details with the provided data.
 *     security:
 *       - BearerAuth: []  # * Assumes bearer token authentication, modify based on your authentication method.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the visitor to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Updated visitor details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                 type: string
 *                 description: The updated name of the visitor.
 *               Phone_Number:
 *                 type: string
 *                 description: The updated phone number of the visitor.
 *               Address:
 *                 type: string
 *                 description: The updated address of the visitor.
 *               Floor_Wing:
 *                 type: string
 *                 description: The updated floor and wing details.
 *               Whom_to_meet:
 *                 type: string
 *                 description: The updated person whom the visitor intends to meet.
 *               Reason_to_meet:
 *                 type: string
 *                 description: The updated reason for the visit.
 *             required:
 *               - Name
 *               - Phone_Number
 *               - Address
 *               - Floor_Wing
 *               - Whom_to_meet
 *               - Reason_to_meet
 *     responses:
 *       200:
 *         description: Visitor updated successfully.
 *       403:
 *         description: Forbidden - Insufficient privileges.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Forbidden: Insufficient privileges"  # * Example message for 403 response.
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error"  # * Example message for 500 response.
 */


//Swagger to delete visitor (User only)
/**
 * @swagger
 * /deleteVisitor:
 *   delete:
 *     summary: Delete visitor data (User access only)
 *     tags: [Visitor]
 *     description: Delete data of a visitor. Requires authentication and user role.
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: The ID of the visitor data to delete.
 *     responses:
 *       200:
 *         description: Visitor data deleted successfully.
 *       403:
 *         description: Forbidden - Insufficient privileges (requires user role).
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



//Swagger for issue pass (user only)
/**
 * @swagger
 * /issuePass:
 *   post:
 *     summary: Issue a visitor pass (User access only)
 *     tags: [VisitorPass]
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
 *         description: Forbidden - Insufficient privileges (requires user role).
 *       404:
 *         description: Visitor not found.
 *       500:
 *         description: Internal Server Error.
 */

//swagger for visitor to retrieve pass (public)
/**
 * @swagger
 * /retrievePass:
 *   post:
 *     summary: Retrieve visitor pass details (Visitor access)
 *     tags: [VisitorPass]
 *     description: Retrieve details of a visitor's pass by providing the visitor's name in the request body.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               visitorName:
 *                 type: string
 *                 description: The name of the visitor.
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
