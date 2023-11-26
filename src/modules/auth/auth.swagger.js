/**
 * @swagger
 * tags:
 *  name: Auth
 */

/**
 * /auth/sendOTP
 * POST:
 *  summary : send otp code for user authorization
 *  tags:
 *      - Auth
 *  requestBody:
 *       content:
 *              application/x-www-url-encoded
 *          schema:
 *              $ref : '#/components/schemas/sendOTP
 *  responses:
 *       200:
 *              description :  success
 *
 */
