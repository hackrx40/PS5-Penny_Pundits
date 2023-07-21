'''
    The following source code handles HTTP request for the API
    CityName

    Quality of Life Index
    HealthCare Index
    Pollution Index
'''


import requests

def getNumbeoData(api_key, city_name, func_string):
    baseURL = "https://www.numbeo.com/api/{function}?".format(function = func_string)
    params = {
        "api_key": api_key,
        "query": city_name
    }

    try:
        response = requests.get(baseURL, params=params)
        response.raise_for_status()  # Check for any error in the response
        data = response.json()
        return data
    except requests.exceptions.RequestException as e:
        print("Error connecting to the Numbeo API:", e)
        return None

# These are hard coded values - Our API key and City Name is fixed
# Replace 'YOUR_API_KEY' with your actual Numbeo API key
apiKey = "zlueew978sczoi"

# Replace 'CityName' with the name of the city you want to retrieve data for
cityName = "Pune"

# Focus on the below insights for Pune
#resultSet = getNumbeoData(apiKey, cityName,"price_items")
resultSet = getNumbeoData(apiKey,cityName,"indices")
#resultSet = getNumbeoData(apiKey,cityName,"city_crime")
#resultSet = getNumbeoData(apiKey,cityName,"city_healthcare")
#resultSet = getNumbeoData(apiKey,cityName,"city_traffic")

if resultSet:
    # Returns list of dictionaries
    '''listItems = resultSet['items'];
    searchKey = "Apartment"
    for itemDict in listItems:
        if(searchKey in itemDict['name']):
            print(itemDict['name'])
    '''
    print(resultSet)
    
else:
    print("Failed to retrieve data from the Numbeo API.")