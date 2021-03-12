const assert = require('assert');
const fetchData = require('./fetch');

it("calls the API and returns the length of the 'hello' key", (done) => {
  // We can't have our implementation calling the real API in our tests, so
  // we craft a mock object. This is straightforward to do in javascript,
  // as things like axios are objects (sets of key value pairs) with
  // functions as keys.
  let fakeAxios = {
    request: options => {
      // Promise.resolve creates a fake promise that resolves immediately.
      return Promise.resolve({data: {hello: "wooorld"}})
    }
  }

  fetchData(fakeAxios).then(result => {
    assert.equal(result, "Length of the 'hello' key is 7")
    // Since our test uses async, we need to take 'done' in the function and
    // call it when we're done with the test.
    done()
  }).catch(console.error)
  // Without this `catch` here, the tests will fail silently.
})
