var ly = require("../leap_year.js")

describe("year < 100", function(){
	it("year = 1", function(){
		expect(ly.isLeapYear(1)).toBe(false)
	})
})