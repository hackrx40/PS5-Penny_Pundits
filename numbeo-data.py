'''
    The following source code handles HTTP request for the API
    CityName

    Quality of Life Index
    HealthCare Index
    Pollution Index
'''
from flask import Flask, jsonify
from flask_cors import CORS
import requests
# These are hard coded values - Our API key and City Name is fixed
# Replace 'YOUR_API_KEY' with your actual Numbeo API key
apiKey = "zlueew978sczoi"

# Replace 'CityName' with the name of the city you want to retrieve data for
cityName = "Pune"

categories = ['Food at Home','Restaurants','Utilities','Rent']
'''
    Helper function to get data based on function
'''
def getNumbeoData(api_key, city_name, func_string):
    baseURL = "https://www.numbeo.com/api/{function}?".format(function = func_string)
    params = {
        "api_key": api_key,
        "query": city_name,
        "children": 0,
        "household_members": 1,
        "include_rent": "true"
    }

    try:
        response = requests.get(baseURL, params=params)
        response.raise_for_status()  # Check for any error in the response
        data = response.json()
        return data
    except requests.exceptions.RequestException as e:
        print("Error connecting to the Numbeo API:", e)
        return None

# Function to get monthly estimate from api
def getMonthlyEstimate():
    resultSet = getNumbeoData(apiKey,cityName,"city_cost_estimator")
    monthlyExpenses = {}
    estimateList = resultSet['breakdown']
    for estimate in estimateList:
        expenseCategory = estimate['category']
        amount = estimate['estimate']
        if(expenseCategory in categories):
            print("Monthly Estimate of",expenseCategory,"is: Rs.",amount)
            monthlyExpenses[expenseCategory] = amount
    return monthlyExpenses


# Function to get city specific indices
def getIndices():
    resultSet = getNumbeoData(apiKey,cityName,"indices")
    print("Welcome! You are in Pune.")
    print("Quality of Life Index: ",resultSet['quality_of_life_index'])
    print("Healthcare Index: ",resultSet['health_care_index'])
    print("Pollution Index:",resultSet['pollution_index'])

# Function to find out if users expenses are more or less than 

samples = getMonthlyEstimate()
app = Flask(__name__)
CORS(app)
# Route to return sample data
@app.route('/get_data', methods=['GET'])
def get_data():
    return jsonify(samples)

if __name__ == '__main__':
    app.run(debug=True)