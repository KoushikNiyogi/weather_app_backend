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
![Screenshot (128)](https://github.com/KoushikNiyogi/weather_app_backend/assets/112813924/32caa30e-ea11-4e96-8d6a-d20b18b32e39)

![Screenshot (129)](https://github.com/KoushikNiyogi/weather_app_backend/assets/112813924/779ee08a-98ae-4f0d-ae15-58d105e16cb4)


## Login

**Route:** `POST /login`

Logs in an existing user.

### Request Payload

```json
{
  "email": "john@example.com",
  "password": "secretpassword"
}
![Screenshot (125)](https://github.com/KoushikNiyogi/weather_app_backend/assets/112813924/2667b3d1-562d-47d2-a89f-22670d5ca0bb)

![Screenshot (126)](https://github.com/KoushikNiyogi/weather_app_backend/assets/112813924/12952f36-2ced-4d7d-a8ed-70dd56491fab)

![Screenshot (127)](https://github.com/KoushikNiyogi/weather_app_backend/assets/112813924/90fdc795-c34b-422d-99b1-234e97550527)


