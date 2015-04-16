var bizzbuzz = require("../bizzbuzz.js")

describe("devide 3 --> 'Fizz'", function(){
	it("3 --> Fizz", function(){
		expect(bizzbuzz.bizz_buzz(3)).toBe("Fizz")
	})
	it("6 --> Fizz", function(){
		expect(bizzbuzz.bizz_buzz(6)).toBe("Fizz")
	})
	it("9 --> Fizz", function(){
		expect(bizzbuzz.bizz_buzz(9)).toBe("Fizz")
	})
})

describe("devide 5 --> 'Buzz'", function(){
	it("5 --> Fizz", function(){
		expect(bizzbuzz.bizz_buzz(5)).toBe("Buzz")
	})
	it("10 --> Fizz", function(){
		expect(bizzbuzz.bizz_buzz(10)).toBe("Buzz")
	})
	it("20 --> Fizz", function(){
		expect(bizzbuzz.bizz_buzz(20)).toBe("Buzz")
	})
})

describe("devide 15 --> 'FizzBuzz'", function(){
	it("15 --> FizzBuzz", function(){
		expect(bizzbuzz.bizz_buzz(15)).toBe("FizzBuzz")
	})
	it("30 --> FizzBuzz", function(){
		expect(bizzbuzz.bizz_buzz(30)).toBe("FizzBuzz")
	})
})