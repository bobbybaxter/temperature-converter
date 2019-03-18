# Temperature Converter
A template converter app.

### Under the Hood
- To connect to elements to the DOM, I've defined the inputs of the following elements:
  - `tempInput`: input area
  - `convertBtn`: the convert button
  - `clearBtn`: the clear button: 
  - `radioC`: celsius radio button
  - `radioF`: fahrenheit radio button: 
- The following functions work as follows:
  - `toCelsius`: defines the unit to pass through `domStringBuilder`, makes the conversion of the temperature to Celsius, is supposed to limit the decimal places on the number with the `.toFixed` method **(I don't think this is working as intended)**, and calling the `domStringBuilder` and passing the temperature and unit.
  - `toFahreneit`: does the same thing as `toCelsius`
  - `printToDom`: assigns our selected text to our selected DOM element
  - `domStringBuilder`: decided which color to pick based on the `finalTemp`, creates the `domString` then prints to the DOM.
  - `determineConverter`: decides to use either `toCelsius` or `toFahrenheit` based on which radio button is selected
  - `enterKeydown`: selects runs `determineConverter` if the enter key is selected
  - `clear`: clears the app's inputs by returning the `tempInput` back to a blank string, unchecks the radio buttons, and prints a blank string to the `tempOutput`
- Next we have an initialization stack on:
  - `convertBtn`: click event that runs `determineConverter` when the button is clicked
  - `document`: keydown event that runs `enterKeydown` when the Enter button is pressed
  - `clearBtn`: click event that runs `clear` when the button is clicked
- `init()` calls the initialization stack

## Screenshots
![image of temperature converter website with cold input](https://raw.githubusercontent.com/bobbybaxter/temperature-converter/master/img/temp-conv-screenshot1.png)
![image of temperature converter website with normal input](https://raw.githubusercontent.com/bobbybaxter/temperature-converter/master/img/temp-conv-screenshot1.png)
![image of temperature converter website with hot input](https://raw.githubusercontent.com/bobbybaxter/temperature-converter/master/img/temp-conv-screenshot1.png)

## Getting Started
Clone the repo:
```
$git clone https://github.com/bobbybaxter/temperature-converter
```

### Prerequisites
Download HTTP Server, to be able to serve the site locally in your browser:
```
$npm install -g http-server
```

## Running
Browse to the temperature-converter/ directory and run HTTP Server by typing the following command into the terminal:
```
$ hs -p 5000
```

In your web browser, copy and paste this:

 `localhost:5000`