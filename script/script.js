
window.onload = (e) => {

    var form = document.querySelector("#main-form");

    form.addEventListener("submit", (e) => {

        // stop form from refreshing the page
        e.preventDefault();
        
        // show alert to the user
        alert("You clicked Calculate");

        // your code here...
        
    });


}