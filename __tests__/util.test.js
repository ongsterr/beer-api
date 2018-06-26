const auth = require('../auth/util');

describe('Test authenticate user function', () => {
  test('Authenticates valid user', () => {
    const email = 'user@example.com';
    const password = 'foobar';

    const results = auth.authenticateUser(email, password);
    expect(results).toBe(true);
  })

  test('Inauthenticate user with wrong email but correct password', () => {
    const email = 'users@example.com';
    const password = 'foobar';

    const results = auth.authenticateUser(email, password);
    expect(results).toBe(false);
  })

  test('Inauthenticate user with correct email but wrong password', () => {
    const email = 'user@example.com';
    const password = 'foobars';

    const results = auth.authenticateUser(email, password);
    expect(results).toBe(false);
  })

  test('Inauthenticate user with undefined email but correct password', () => {
    const email = undefined;
    const password = 'foobar';

    const results = auth.authenticateUser(email, password);
    expect(results).toBe(false);
  })

  test('Inauthenticate user with correct email but undefined password', () => {
    const email = 'user@example.com';
    const password = undefined;

    const results = auth.authenticateUser(email, password);
    expect(results).toBe(false);
  })
  
})