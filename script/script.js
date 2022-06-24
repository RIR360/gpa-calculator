
var CREDIT = 18;
var PER_COURSE = 3;
var PER_LAB = 1.5;


window.onload = (e) => {

    var form = document.querySelector("#main-form");

    form.addEventListener("submit", (e) => {

        // stop form from refreshing the page
        e.preventDefault();
        
        var course1 = form['course1'].value;
        var course2 = form['course2'].value;
        var course3 = form['course3'].value;
        var course4 = form['course4'].value;
        var course5 = form['course5'].value;
        var lab1 = form['lab1'].value;
        var lab2 = form['lab2'].value;
        var subject= 7;
        var result = (parseFloat(course1)+parseFloat(course2)+parseFloat(course3)+parseFloat(course4)+parseFloat(course5)+parseFloat(lab1)+parseFloat(lab2))/parseFloat(subject);
        result= result.toFixed(2);

        document.querySelector("#final-gpa").innerHTML = result;
    });


}