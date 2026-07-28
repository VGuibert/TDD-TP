const scriptAdd = require('./calculator');

describe("Empty string and ok test",()=> {
    test("Empty string numbers", () => {
    expect(scriptAdd("")).toBe(0);
    })
    test("sum test 1+1", () => {
    expect(scriptAdd("1,1")).toBe(2);
    })
})

describe("handle new lines between numbers",()=>{
    test("New line and ok test", () => {
      expect(scriptAdd("1\n2,3")).toBe(6);
      })
       test("New line and ko test", () => {
      expect(scriptAdd("1,\n")).toBe(1);
      })
})

test("Separate line with delimiter", () => {
      expect(scriptAdd("//;\n1;2")).toBe(3);
})


describe("Negative tests",()=> {
    function scriptAddTest() {
    scriptAdd("1\n2,-3");
  }
  function scriptAddTest2() {
    scriptAdd("1\n2,-3,-4");
  }
    test("negative not alowed", () => {
    expect(scriptAddTest).toThrow('negatives not allowed | -3');
    })
    test("negative not alowed", () => {
    expect(scriptAddTest2).toThrow('negatives not allowed | -3 -4');
    })
})