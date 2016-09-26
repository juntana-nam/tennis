function fizzbuzz(number){
  if(number%3 === 0 && number%5 === 0){
    return 'FizzBuzz';
  }
  if(number%3 === 0){
    return 'Fizz';
  }
  if(number%5 === 0){
    return 'Buzz';
  }
  else{
    return number + '';
  }

}
describe("fizzbuzz()", function() {
  it("should be 'Fizz' when I put 3 ", function() {
    var str = fizzbuzz(3);
    expect(str).toEqual('Fizz'); //toBe มีความเทียบเท่ากันรึเปล่า , toEqual เทียบ string
  });

  it("should be 'Buzz' when I put 5 ", function() {
    var str = fizzbuzz(5);
    expect(str).toEqual('Buzz'); //toBe มีความเทียบเท่ากันรึเปล่า , toEqual เทียบ string
  });

  it("should be 'Buzz' when I put 15 ", function() {
    var str = fizzbuzz(15);
    expect(str).toEqual('FizzBuzz'); //toBe มีความเทียบเท่ากันรึเปล่า , toEqual เทียบ string
  });
  it("should be 'Buzz' when I put 1 ", function() {
    var str = fizzbuzz(1);
    expect(str).toEqual('1'); //toBe มีความเทียบเท่ากันรึเปล่า , toEqual เทียบ string
  });


});
