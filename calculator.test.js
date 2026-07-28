const scriptAdd = require('./calculator');

describe("Empty string",()=> {
    test("Empty string numbers1", () => {
    expect(scriptAdd('',2)).toBe(0);
    })
    test("Empty string numbers2", () => {
    expect(scriptAdd(2,'')).toBe(0);
    })
})
