/**
 * @swagger
 * tags:
 *  name: Auth
 */

/**
 * @swagger
 * /auth/sendOTP:
 *      post:
 *          summary: 'send otp code for user authorization'
 *          tags:
 *              - Auth
 *          requestBody:
 *              content:
 *                  application/x-www-url-encoded
 *              schema:
 *                  type: object
 *                  required:
 *                      - mobile
 *                  properties:
 *                      mobile:
 *                          type: string
 *          responses:
 *              200:
 *                  description:  success
 *
 */
