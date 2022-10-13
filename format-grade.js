function foratGare(grade) {
    /**Write a function that receives a grade between 2.00 and 6.00 and prints a formatted line with grade and description.
< 3.00 - "Fail"
>= 3.00 and < 3.50 - "Poor"
>= 3.50 and < 4.50 - "Good"
>= 4.50 and < 5.50 - "Very good"
>= 5.50 - "Excellent" */

    let word = '';

    if (grade < 3) {
        word = "Fail";
    } else if (grade <3.5) {
        word = "Poor";
    } else if (grade < 4.5) {
        word = "Good";
    } else if (grade <5.5) {
        word = "Very good";
    } else {
        word = "Excellent";
    }

    if (word == "Fail") {
        console.log("Fail (2)")
    } else {
        console.log(`${word} (${grade.toFixed(2)})`)
    }


}

foratGare(3)