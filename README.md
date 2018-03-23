## Thermostat 5th week

# this program is simulating a simple thermostat

Week 5 Challenge

Summary
----
This simple web app allows a user to set the temperature on a digital thermostat.

How to run the web app
----
```sh
$ git clone git@github.com:[antcin]/thermostat-challenge.git
$ cd Thermostat.js
$ open index.html
```
How to run the feature test
----

```sh
$ cd Thermostat.js
$ open SpecRunner.html
```

Functionalities
----
- The user can increase the temperature.
- The user can decrease the temperature.
- The user can reset the temperature.
- The user can turn a power saving mode on and off.
- The user can enter a location and the app will return the temperature in that location.

Logic
----
- The thermostat is initialised at a default temperature of 20°C.
- The minimum temperature is 10°C.
- When power saving mode is on, the temperature can be increased to a maximum value of 25°C.
- When power saving mode is off, the temperature can be increased to a maximum value of 32°C.
- The energy usage is indicated as below:
  - low-usage: 10°C - 17°C
  - medium-usage: 18°C - 25°C
  - high-usage: 26°C - 32°C

Programming languages used
----
- Back-end
  - JavaScript
    - [jQuery library](https://jquery.com/)
    - [Jasmine - testing framework](https://jasmine.github.io/)
- Front-end
  - HTML
  - CSS
  - [OpenWeatherMap API](https://openweathermap.org/api)

Improvements required
----
- Edge cases
  - When switching from power saving mode on to off is , reset maximum temperature to 25°C.
- CSS Design.
- Implement persistence.

Reflections
----
This was my very first approach to develop a web app using JavaScript (JS). I found this language less intuitive than Ruby, and slightly more cumbersome with regards to syntax and TDD. Nonetheless, I really enjoyed the challenge and appreciate the flexibility of JS; and it is great to see that, in only four days, I could get a grasp on it. Using [walkthroughs](https://github.com/makersacademy/course/tree/master/thermostat) did help to reinforce my understanding of some concepts. There is still a long way to go, however I feel rather satisfied with what I achieved.

```

User story

As a technician,
So I can build a thermostat,
I want the thermostat has a starting default_temperature.

As a technician,
So I can make any changes to the thermostat,
I want to increase the temperature up.

As a technician,
So I can make any changes to the thermostat,
I want to decrease the temperature down.

As a technician,
So I can setup a minimum temperature to the thermostat,
I want that the temperature does not go below the limit of 10 degrees.

As a technician,
So I do not use too much energy,
I want the maximum settable temperature to be 25 degrees,
when power saving mode is on.

As a technician,
So I do not use too much energy,
I want the maximum settable temperature to be 32 degrees,
when power saving mode is off.

As a technician,
So I do not use too much energy,
I want power saving mode is on by default.

As a technician,
So I do not get too hot,
I want be able to re-set the temperature as 20 degrees default.

As a technician,
So I do know my usage during the day,
I want to check if my usage is either low, medium or hight.


```
