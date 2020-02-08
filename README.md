# Project-4-Weather-App

## Technologies

1. Docker (https://www.docker.com/)
2. Ipify (A ip finding api)
3. Geocode (Gem used to find location based on different approches, i used it
   with the  ip returned form Ipify Of course)(https://github.com/alexreisner/geocoder) 
4. net/http (a technology alredy included with rails that can be used for
   calling API's)
5. JSON (Gem used to control better the use of JSON giving you some added
   options)
6. PostgreSQL (Database used for saving data for my ruby in rails part of the
   app)
7. Ruby On Rails
## Problems

* Docker
  Using docker even tho an amazing learning experience for me so far was also is
  an obstacle sometime since stuff you do on it is different
* Using IP
  It took me really long to fidn the way to find an users IP first i wanted to
  try making it trought ruby code without any external things, was kinda
  succesuful but had problems because ruby could only get me bakc the private IP
  which cant be looked up online, making it  not a correct solution.
* Postgresql
  Even thought we ahve been using rails to control te database beacuse the way i
  am seeding my data I found some problems trough the way, having to find a way
  to go into my postgres docker drop all the databases make sure to break
  anything (it still did) and then go bakc to the ruby DOcker and try again this
  was fun is all I am going to say.
