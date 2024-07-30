const request = require('supertest');
const app = require('../app');

describe('User Routes', function() {
  it('should fetch user details', async function() {
    const response = await request(app).get('/users/1');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('username');
    // Add more expectations as needed
  });

  // TESTS BUG #2
  it('should return 404 for non-existent user', async function() {
    const response = await request(app).get('/users/999');
    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe('User not found'); // Assuming this is the error message
  });

  // TESTS BUG #3
  it('should not allow invalid user update', async function() {
    const response = await request(app).patch('/users/1').send({ email: 'invalid-email' });
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe('Invalid email format'); // Assuming this is the error message
  });

  // TESTS BUG #6
  it('should reject unauthorized access to user details', async function() {
    const response = await request(app).get('/users/1'); // or any protected route
    expect(response.statusCode).toBe(401);
    expect(response.body.message).toBe('No token provided'); // Assuming this is the error message
  });

  it('should allow authorized access to user details', async function() {
    // Generate a valid token
    const token = jwt.sign({ username: 'testuser' }, SECRET_KEY, { expiresIn: '1h' });

    const response = await request(app)
      .get('/users/1') // or any protected route
      .set('Authorization', `Bearer ${token}`);

    expect(response.statusCode).toBe(200); // or appropriate status code
  });
});
