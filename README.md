# JSON Born 2


### Your Task

Make our little users manipulation app a `json-server`-run back end with a really REALLY basic browser front end.


### Background

Our last JSON project used `fs`, which allowed us to set up a back-end where we read the local file and decided what to do with it. Some examples:

* If we got a GET request to the `users` route, we ran `console.log` for all users.
* If we got a GET request to the `users 2` route, we found the user with that `index` and ran console log on it.
* If we got a POST request to `friends 3` with a name, we made a new friend object with that name and attached it to the user object at that `index`.

This time, our back end will be run by the pre-configured `json-server` library. It looks at the `db.json` file and maps out routes based on that. Since we'll have a `users` key in our JSON file, and all of our objects in that `users` array will have an `id` property, it will set up two basic routes:

1. `/users`, which is for all users.
2. `/users/[id]`, which applies to just the user with that `id` property.

And it will also set up different actions for each of those routes. For example:

* If we send a `GET` request to `/users/[id]`, we'll get only that user.
* If we send a `POST` request to `/users` with a JSONned user object, it will write add that user to the JSON file--even giving it a unique `id` value for us!

While you'll be back to having to configure your own back end in Term 2, the key thing for this project is that `json-server` is going to take care of the JSON retrieval and editing for us; all we have to do is fashion our request properly and send it.


### Setup And Basic Workflow

1. Install `json-server` globally so that you can access it anywhere. Run `npm install -g json-server` from any directory.
* On the front end, you have an `index.html` file which exists solely to load `main.js`--and any other files you decide to create--and let them console.log to the browser. Open this file in a browser using Command-O. Do *not* run it as a live-server, since that will reload the page and send more requests every time you make a change. You can easily end up with the same object POST'd to the database dozens of times!
* To see the results of your requests, you can simply reload the page and check the console.
* We already have a function that gets all users, to get you started, and we're calling it in `main.js`. After you load the page and see the results in the console, it's a good idea to comment out that call, so it doesn't pollute your console.
* Now: Make a function that will (once we finish it) make a GET request to get a SPECIFIC user, using its index. You'll want to send a GET to `users/[some id]`.
* Once you've finished that function, call it in `main.js` so that it will run when you reload your `index.html`.
* Once you see that it works, comment out the call to your function so that it doesn't interfere with any others.
* Repeat steps 5-7 for each route.


### Portrait Of An XHR

These are the steps you'll want to take for each route. Check the route you've started with to see how it works!

1. Instantiate a `new XMLHttpRequest`.
2. Set up an event listener on your `xhr` for a `loadend` event. You'll be passed some JSON in the callback if your request goes through!
3. Run an `xhr.open()` with two parameters: the request (`GET` or `POST` or whatever you want) and the URL (if you're running the server on the same machine, this will be the `localhost` link from `json-server`).
4. Extra step if you're making a request OTHER than a `GET` request: call `xhr.setRequestHeader` with the parameters `'Content-Type'` and `'application/json'` (note that they're strings!). This tells your `xhr` that you want JSON, not XML.
5. Run an `xhr.send()`, passing in a JSONified object if the request needs any additional info (like the object you want posted).
6. Check your `console` for results from your callback, and check the terminal running `json-server` to see what's happening on the server.


### Guidelines

* You do NOT need any real front end to this. I recommend defining functions called `getUser` and `postUser` and such that merely console log the results, then calling only one of them at a time (commenting any others out if need be), reloading the page, and checking the console and the `db.json` file to see what happens.
* You should be able to get every single one of the "routes" you used before to be _actual_ routes. Delete, get, put, and post to your heart's content.
* If you DIDN'T finish all the routes from the previous, check out the solution repo!
