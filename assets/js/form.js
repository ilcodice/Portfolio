
function validation(){

    const email = document.registration.email.value
    const firstname = document.registration.first_name.value
    const lastname = document.registration.last_name.value
    const gender = document.registration.gender.value
    const country = document.registration.country.value 

    if (email.endsWith("@dci-student.org") == false){ 
        alert("Email should end with @dci-student.org")
        return false
    }
    if (firstname.length < 8 ) {
        alert("first name should be more than 8")
        return false
    }
    if (lastname.length == 0){
        alert("last name should be provided")
        return false
    }
        

    if (country == "usa" && gender != "female"){
         alert("we only register females in usa")
         return false
    }
    

}
function activateSubmit(){
    const email = document.registration.email.value
    const firstname = document.registration.first_name.value
    const lastname = document.registration.last_name.value
    const submitBtn = document.getElementById("submit")

    if (email.length > 0 && firstname.length > 0 && lastname.length > 0 ){
        // remove submit-disabled"class from submit button"
        submitBtn.classList.remove("submit-disabled")
    } else { 
        //add submit-disabled class if it doesent exist
        submitBtn.classList.add("submit-disabled")
    }
}