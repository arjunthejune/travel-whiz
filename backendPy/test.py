import requests

boner = [
  "restaurant",
  "casual dining place"
]

lat = 33.684566
long = -117.826508
radius = 1500
groqRequest = boner[0] 
groqRequest2 = boner[1]
url = f"https://maps.googleapis.com/maps/api/place/nearbysearch/json?location={lat},{long}&radius={radius}&type={groqRequest}&keyword={groqRequest2}&key=API"
response = requests.get(url)
print(response.text)