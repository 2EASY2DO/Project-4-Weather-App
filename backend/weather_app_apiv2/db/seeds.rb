# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'geocoder'
require 'net/http'

ip = Net::HTTP.get(URI("https://api.ipify.org"))
results = Geocoder.search(ip)
weather = Net::HTTP.get(URI("https://api.openweathermap.org/data/2.5/weather?lat=#{results.first.coordinates[0]}&lon=#{results.first.coordinates[1]}&units=imperial&appid=d9ef4de64990de2f34d03e7ea9de8599"))
hash = JSON.parse(weather)
lat = results.first.coordinates[0];
lng = results.first.coordinates[1];
Location.create([
  {lat: lat, lng: lng, name: hash["name"]}
]);
Temperature.create([
  {average_high_f: 0, average_low_f: 0, location_id: 1},
  {average_high_f: hash["main"]["temp_max"], average_low_f: hash["main"]["temp_min"], location_id: 1}
]);
