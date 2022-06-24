# GPA Calculator 1.0
University Grade Point Average calculator. National University Bangladesh

# GPA Caclculation Process
Step by step guide through the GPA calculation process.

* Find *total_credits*
  ` + ( total_lab_amount * credit_per_lab )`
  Example: (5 * 3) + (2 * 1.5) = 18   (This is cse 1st semester total credit)

* Find the *weighted_result* from the student's result
  ` summation( per_course_result * credit_per_course ) + summation( per_lab_result * credit_per_lab ) `
  Here *per_course_result* is the input you've taken from the website.

* Divide the *weighted_result* by the *total_credits* to get the final gpa
  ` Final_GPA = weighted_result / total_credits`

* Final_GPA is the desired gpa of the student!