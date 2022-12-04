var CREDIT = 18;
var CREDIT_PER_COURSE = 3;
var CREDIT_PER_LAB = 1.5;

function add_input(type) {
    if (type == "course") {
        let course_con = document.getElementById("course-container");
        let inputs_available = course_con.querySelectorAll(".input-group").length;
        let input_group = document.createElement("div");
        input_group.classList = "input-group py-1";
        input_group.innerHTML = `
            <input type="text" class="form-control" placeholder="Course Name">
            <select name="course${inputs_available+1}" class="form-control" required>
                <option value="" selected>Choose Your Grade</option>
                <option value="4.00">A+</option>
                <option value="3.75">A</option>
                <option value="3.50">A-</option>
                <option value="3.25">B+</option>
                <option value="3.00">B</option>
                <option value="2.75">B-</option>
                <option value="2.50">C+</option>
                <option value="2.25">C</option>
                <option value="2.00">D</option>
            </select>
        `;
        course_con.appendChild(input_group);

    } else if (type == "lab") {
        let lab_con = document.getElementById("lab-container");
        let inputs_available = lab_con.querySelectorAll(".input-group").length;
        let input_group = document.createElement("div");
        input_group.classList = "input-group py-1";
        input_group.innerHTML = `
            <input type="text" class="form-control" placeholder="Lab Name">
            <select name="lab${inputs_available+1}" class="form-control" required>
                <option value="" selected>Choose Your Grade</option>
                <option value="4.00">A+</option>
                <option value="3.75">A</option>
                <option value="3.50">A-</option>
                <option value="3.25">B+</option>
                <option value="3.00">B</option>
                <option value="2.75">B-</option>
                <option value="2.50">C+</option>
                <option value="2.25">C</option>
                <option value="2.00">D</option>
            </select>
        `;
        lab_con.appendChild(input_group);
    } else {
        alert("Type not given");
    }
}


window.onload = (e) => {

    var form = document.querySelector("#main-form");

    form.addEventListener("submit", (e) => {

        // stop form from refreshing the page
        e.preventDefault();
        
        var course1 = parseFloat(form['course1'].value * CREDIT_PER_COURSE);
        var course2 = parseFloat(form['course2'].value * CREDIT_PER_COURSE);
        var course3 = parseFloat(form['course3'].value * CREDIT_PER_COURSE);
        var course4 = parseFloat(form['course4'].value * CREDIT_PER_COURSE);
        var course5 = parseFloat(form['course5'].value * CREDIT_PER_COURSE);

        var lab1 = parseFloat(form['lab1'].value * CREDIT_PER_LAB);
        var lab2 = parseFloat(form['lab2'].value * CREDIT_PER_LAB);

        var result =(course1 + course2 + course3 + course4 + course5 + lab1 + lab2) /(CREDIT);
        result= result.toFixed(2);

        // showing output
        document.querySelector("#final-gpa").innerHTML = result;
    });


}
