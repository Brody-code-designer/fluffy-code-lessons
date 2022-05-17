    /**
    * Add two numbers together and return the result.
    *
    * @param number number1 first number to be added.
    * @param number number2 second number to be added.
    * @return number total of number1 + number2.
    */


    function addNumbers(number1, number2) {
        return number1 + number2;  
    }

    /**
    * Combine two strings together and return the result.
    *
    * @param string string1 first string  to be added.
    * @param string string2 second string to be added.
    * @return number total of number1 + number2.
    */

    function combineStrings(string1, string2) {
        total = string1 + string2;
        return total;
    }

    // Sample addition call.
    sum = addNumbers(2, 3);
    console.log(sum);

    // Sample concatenation call.
    concatenatedString = combineStrings('Hello ', 'world!');
    console.log(concatenatedString);
