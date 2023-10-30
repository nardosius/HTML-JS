const { default: TestRunner } = require("jest-runner");
const addFive = require('./addFive');//"./" means prog in same program as test file

test('returns the number plus 5', () => {//form of anon inner funx/method
    expect(addFive(1)).toBe(6);
})
