const axios = require('axios')

// with callback
function fetchPostCB (cb) {
  axios('https://jsonplaceholder.typicode.com/posts/1').then(res => {
    console.log("res.data.id ==> ", res.data.id); 
    return cb(res = res.data)
  });
}
// fetchPostCB()

// with promise
function fetchPost (id) {
  return new Promise(resolve => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => resolve(res.data))
  })
}
// fetchPost(1)

// tesing resolve (also would work pretty much for reject as well so moving on)
function fetchPostToResolve (id) {
  return new Promise(resolve => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => resolve("resolved"))
  })
}
// fetchPostToResolve(1)


// this should fail
function fetchPostToFail (id) {
  return new Promise((resolve, reject) => {
    axios.get(`https://jsonplaceholder.typicode.com/psts/${id}`)
      .catch(res => reject("error"))
  })
}

test('id is 1 - with callback ', done => {
  function callback(data) {
    try {
      expect(data.id).toBe(1);
      done();
    } catch (error) {
      done(error);
    }
  }
  fetchPostCB(callback);
});

test('id is 1 - with promises', async () => {
  return fetchPost(1).then(data => {
    expect(data.id).toBe(1);
  });
});

test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchPostToFail(1).catch(e => expect(e).toMatch('error'));
});


test('expecting fetch to be resolved', () => {
  return expect(fetchPostToResolve(1)).resolves.toBe("resolved");
});


// ASYNC - AWAIT FUNCTIONS
test('async - await testing', async () => {
  const data = await fetchPost(1);
  expect(data.id).toBe(1);
});

test('async - await fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchPostToFail(1);
  } catch (e) {
    expect(e).toMatch('error');
  }
});

test('async - await resolve', async () => {
  await expect(fetchPostToResolve(1)).resolves.toBe('resolved');
});

// test('the fetch fails with an error', async () => {
//   await expect(fetchPostToFail(1)).rejects.toMatch('error');
// });


// I could apparently use the test.only command (instead of test) to test the codes that were causing an error