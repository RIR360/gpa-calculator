
var CREDIT = 18;
var PER_COURSE = 3;
var PER_LAB = 1.5;


window.onload = (e) => {

    var form = document.querySelector("#main-form");

    form.addEventListener("submit", (e) => {

        // stop form from refreshing the page
        e.preventDefault();

        // your code here...
        var course1 = form['course1'].value;

        var result = course1;

        document.querySelector("#final-gpa").innerHTML = result;
        
        
    });


}