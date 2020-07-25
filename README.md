# A React-JS assessment

This repo includes a set of tests that can be used to assess the skills of
a candidate for a ReactJS position.

## I want to work on the tests; what do I do?
To use the tests, you will need to install [Node](https://nodejs.org/). Note
that on Windows, there are some reports that you will need to restart
after installing Node - see #12.

You can clone or download this repo. Once you have done so, from the root
directory of the repo, run:

    npm install
    npm start

You can then view the app in your browser at
[http://localhost:4001](http://localhost:4001).

Additionally, you can start rest-service by run:

    npm run start:api
    
You can then view the API in your browser at
[http://localhost:4002](http://localhost:4002). Available API endpoints:

 * [product](http://localhost:4002/products)
 * [cart](http://localhost:4002/products)
 * [featured-deals](http://localhost:4002/products)
 * [session](http://localhost:4002/products)
 
# Features

  * [Numeric Input](#numeric-Input)
  * [Ajax](#ajax)
  * [Counter](#counter)
  * [Relative Date](#relative-date)
  * [Date Range](#date-range)
  * [Contact Us](#contact-us)

## Numeric Input `#Numeric Input`

Component Location: src/features/NumericInput/index.js
Requirement:

 * write an input component  that will take only number 0 to 9 
 * if user enter invalid charater, display error messsage 
 below text input and change border-color of input to red
 * write a unit test for this component

Initial State:<br/>
![Initial State](img/numeric-input-initial-state.png?raw=true "Numeric Input Initial State")

Invalid State:<br/>
![Invalid State](img/numeric-input-invalid-state.png?raw=true "Numeric Input Invalid State")

Valid State:<br/>
![Valid State](img/numeric-input-valid-state.png?raw=true "Numeric Input valid State")

## Ajax `#ajax`

Component Location: src/features/FeaturedDeals/index.js
Requirement:
 * write a component to fetch & display products of Featured Deal
   * [localhost:4002/featured-deals](localhost:4002/featured-deals): return ```int[]``` of product-id
   * [localhost:4002/products](localhost:4002/products): return ```{product}[]``` 
 * write a unit test for this component

Valid State:<br/>
![Valid State](img/featured-deal-valid-state.png?raw=true "Featured Deal valid State")

## Counter `#counter`

Component Location: src/features/Counter/index.js
Requirement: 
 * write a component with buttons to increase or decrease redux-state value
   * [+] button will increase value by 1 
   * [-] button will decrease value by 1
 * write a unit test for this component

Initial State:<br/>
![Inital State](img/counter-initial-state.png?raw=true "Counter valid State")

Changed State:<br/>
![Changed State](img/counter-changed-state.png?raw=true "Counter changed State")

## Relative Date `#relative-date`

Component Location: src/features/RelativeDate/index.js
Requirement: 
 * write a function that will take a date and compare with today date and return text:
   * Today: same year, same month, same date 
   * Yesterday: same year, same month, date = today - 1 
   * This week: same year, same month, today - 7 < date  < today - 1
   * Last week: same year, same month, date = today - 7
   * This month: same year, same month, date < today - 7
   * Last month: same year, month = current month - 1
   * This year: same year
   * last year: year = current year - 1
   * Long time ago: everything else
 * write a unit test for this function

Initial State:<br/>
![Inital State](img/relative-date-initial-state.png?raw=true "Relative Date Initial State")

Valid State:<br/>
![Changed State](img/relative-date-valid-state.png?raw=true "Relative Date valid State")

## Date Range `#date-range`

Component Location: src/features/Utiles/date-range.js
Requirement: 
 * write a function that will pass all its unit-tests (src/features/Utiles/date-range.test.js) :
   * function will take 2 parameters({Date}fromDate, {Date}toDate) and return {String}
   * dd-MMM-yyyy - dd-MMM-yyyy: default value
   * dd-MMM-yyyy: fromDate = toDate 
   * MMM-yyyy: fromDate year, month = toDate year, month
   * Q?-yyyy: for Quarter date-range   
   * MMM = 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
 * write a unit test for this function

Valid State:<br/>
![Changed State](img/date-range-valid-state.png?raw=true "Date Range valid State")

## Contact us `#contact-us`

Component Location: src/features/ContactUs/index.js
Requirement: 
 * optimize performance on contact-form - its responses very slow when we enter value in name, email or comment input
   * the form has 3 controlled-components (name, email and comment) and 1 hidden/readonly component(captcha)
   * 3 controlled-components should remain as controlled-component 
   * Captcha Input/Component takes a "token" property and return hidden/readonly input with value of hash-string.
   You can't change this component
 * write a unit test for this component
 
 Initial State:<br/>
 ![Inital State](img/contact-us-initial-state.png?raw=true "Contact Us Initial State")

# Packages

 * [react 16.13.1](https://reactjs.org/)
 * [react-jss 10.3.0](https://cssinjs.org/react-jss?v=v10.3.0)
 * [react-redux 4.0.5](https://react-redux.js.org/)
 * [reselector 0.17.0](https://github.com/reduxjs/reselect)
 * [json-server 0.16.1](https://github.com/typicode/json-server)
 * [react-router-dom 5.2.0](https://reactrouter.com/web/guides/quick-start)

# License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
<img alt="Creative Commons License" style="border-width:0" 
src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>

<br/>This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.