// *Conditional:
// *Create a program that checks if a given year is a leap year

const leapYear = (year) => {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return (console.log(`${year} is a leap year`))
            } else {
                return (console.log(`${year} is not a leap year`))
            }
        } else {
            return (console.log(`${year} is a leap year`))
        }
    } else {
        return (console.log(`${year} is not a leap year`))
    }
}

leapYear(1900)