Fullstack Weather App
Will be using https://openweathermap.org/api to get current weather
Sign up for an api key. Click subscribe then choose the Free option.
Click API keys and copy the key. You will need the key for the Axios call.
Go to https://openweathermap.org/current and read how to make calls for one location by city name. Follow their format and Examples of API calls.
Use create-react-app and express-generator to setup skeleton for the frontend and backend
Use .env to hold important information! (API key should be in .env)
* In React's .env must use REACT_APP_


Backend-
1. Set up /location route, connect router, controller and model.

2. Create a location Model

3. Set up all the functionalities in the Controller for these routes:
   * /get-all-searched-locations
   * /add-location
   * /delete-location-by-id
