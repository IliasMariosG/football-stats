# An example something like what you're trying to do

This example implements:

* Axios to fetch API data (your API only you'll have access to so I've created a fake one for purposes of illustration)
* Mocha and manual mocking to test

If promises/async is still new to you, consider using [this resource](https://github.com/makersacademy/course/blob/master/pills/calling_apis_in_javascript.md). It uses `fetch` instead of `axios` but the principle is the same.

## Quickstart

To get this going, run:

```
node example/fake_server.js
```

And then, in a new terminal:

```
npm test -- example/fetch_test.js
```
