/**
* Convert a weight or mass to grams.
*
* @param weight The weight or mass to be converted.
* @param units The abbreviation for the units in which this weight/mass is measured.
* @return The mass in grams.
*/
function convertToGrams(weight, units) {
    if (units === 'lb') {
	    return weight * 453.592;
    } else if (units === 'oz') {
	    return weight * 28.35;
    } else if (units === 'kg') {
	    return weight * 1000;
    } else if (units === 'mg') {
	    return weight / 1000;
    } else {
	    return weight;
    }
}

/**
* Find the sum of all unique positive factors of a number.
*
* @param int number The number which we are finding factors for.
* @return The sum of all unique positive factors.
*/
function sumUniquePositiveFactors(number) {
    number = Math.abs(number);
    sum = 0;
    for (i=1; i<=number; i++) {
	    if (number % i === 0) {
		    sum = sum + i;
	    }
    }
    return sum;
}

// Displays 567
console.log(convertToGrams(20, 'oz'));

// Displays 2000
console.log(convertToGrams(2, 'kg'));

// Displays 42
console.log(sumUniquePositiveFactors(20));
