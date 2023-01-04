const CREDIT_PER_COURSE = 3;
const CREDIT_PER_LAB = 1.5;

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

    const form = document.querySelector("#main-form");
    const course_container = document.querySelector("#course-container");
    const lab_container = document.querySelector("#lab-container");
    const output = document.querySelector("#final-gpa");

    form.addEventListener("change", (e) => {

        // stop form from refreshing the page
        e.preventDefault();

        // get all input
        let courses = course_container.querySelectorAll(".input-group");
        let lab_courses = lab_container.querySelectorAll(".input-group");

        let course_sum = 0;
        let lab_course_sum = 0;

        courses.forEach(course => {
            course_sum += parseFloat(course.querySelector("select").value * CREDIT_PER_COURSE)
        })

        lab_courses.forEach(lab => {
            lab_course_sum += parseFloat(lab.querySelector("select").value * CREDIT_PER_LAB)
        })

        let total_credit = parseFloat((courses.length * CREDIT_PER_COURSE) + (lab_courses.length * CREDIT_PER_LAB));
        let result = (course_sum + lab_course_sum) / (total_credit);

        // showing output
        output.innerHTML = result.toFixed(2);

    })
}
