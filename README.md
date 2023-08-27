# Weather API Routes

This API provides endpoints for user registration, login, and weather data management. It allows users to register, log in, save weather data for their current city, and retrieve their current city's weather data.

## Backend URL - https://ill-pink-salmon-garb.cyclic.cloud

## Routes

## Register

**Route:** `POST /register`

Registers a new user in the system.

### Request Payload

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "secretpassword"
}
```

