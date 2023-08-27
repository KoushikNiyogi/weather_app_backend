# Weather API Routes

This API provides endpoints for user registration, login, and weather data management. It allows users to register, log in, save weather data for their current city, and retrieve their current city's weather data.

## Routes

### Register User

Endpoint: `POST /register`

Registers a new user with the provided information.

Request Body:
```json
{
  "name": "User Name",
  "email": "user@example.com",
  "password": "userpassword"
}