const request = require('supertest');
const app = require('../app');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');
const bcrypt = require('bcrypt');
const db = require('../db');
const { BCRYPT_WORK_FACTOR } = require('../config');

describe('Auth Routes', function() {
  it('should register a new user', async function() {
    const response = await request(app).post('/auth/register').send({
      username: 'testuser',
      password: 'password',
      first_name: 'Test',
      last_name: 'User',
      email: 'test@example.com',
      phone: '1234567890'
    });
    expect(response.statusCode).toBe(201);
  });

  // TESTS BUG #1
  it('should reject invalid email during registration', async function () {
    const response = await request(app).post('/auth/register').send({
      username: 'testuser',
      password: 'password',
      first_name: 'Test',
      last_name: 'User',
      email: 'invalid-email',
      phone: '1234567890'
    });
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe('Invalid email format'); // Assuming this is the error message
  });

  // TESTS BUG #4
  it('should reject requests without valid tokens', async function() {
    const response = await request(app).get('/users/1'); // or any protected route
    expect(response.statusCode).toBe(401);
    expect(response.body.message).toBe('No token provided'); // Assuming this is the error message
  });

  it('should accept requests with valid tokens', async function() {
    // Generate a valid token
    const token = jwt.sign({ username: 'testuser' }, SECRET_KEY, { expiresIn: '1h' });

    const response = await request(app)
      .get('/users/1') // or any protected route
      .set('Authorization', `Bearer ${token}`);

    expect(response.statusCode).toBe(200); // or appropriate status code
  });

  // TESTS BUG #5
  it('should store passwords securely', async function() {
    const response = await request(app).post('/auth/register').send({
      username: 'secureuser',
      password: 'securepassword',
      first_name: 'Secure',
      last_name: 'User',
      email: 'secure@example.com',
      phone: '1234567890'
    });
      
    expect(response.statusCode).toBe(201);
      
    const user = await db.query(`SELECT * FROM users WHERE username='secureuser'`);
    const storedPassword = user.rows[0].password;
  
    // Check if the stored password is hashed
    const isMatch = await bcrypt.compare('securepassword', storedPassword);
    expect(isMatch).toBe(true);
  });
});
