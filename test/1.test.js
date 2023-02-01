const test = require('node:test');
const assert = require('node:assert');
const {
    createUser,
    createSession,
    // getSession - not yet created
    reset,
} = require('./helper.js');

test('createSession can create and insert a new session', async () => {
    // clears the db
    reset();
    // create a user
    const user = createUser('MrTest', 'abc');
    // create a session id
    const sid = createSession(user.id);
    assert.ok(
        sid,
        `Expected: createSession to return sid, but received "${sid}".`
    );

    assert.ok(
        sid.length > 12,
        `Expected: sid to be above 12 characters, but received sid of ${sid.length} characters.`
    );

    // get session test
});
