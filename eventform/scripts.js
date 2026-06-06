const form = document.querySelector("form");
const type = document.querySelector("#type");
const code = document.querySelector("#code");
const numberContainer = document.getElementById("studentId")
const codeContainer = document.getElementById("generalCode")
const number = document.querySelector("#number");

function onChange() {
    const value = type.value;
    if (value === "student") {
        console.log("student triggered")
        numberContainer.hidden = false;
        number.required = true;
        codeContainer.hidden = true;
        code.required = false;
    } else if (value === "guest"){
        console.log("Code trigerred")
        codeContainer.hidden = false;
        code.required = true;
        numberContainer.hidden = true;
        number.required = false;
    } else {
        console.log("reset triggered")
        codeContainer.hidden = true;
        code.required = false;
        numberContainer.hidden = true;
        number.required = false;
    }
}

type.addEventListener("change", onChange)

form.addEventListener("submit", function (event){
    event.preventDefault();
    output.textContent = "";

    const fname = form.fname.value.trim();
    const lname = form.lname.value.trim();
    const email = form.email.value.trim();
    const date = form.date.value.trim();
    const type = form.type.value.trim();
    
    //verify date is not in the past

    //verify that studentid is exactly 9 characters long
    if (type === "student") {
        console.log("id check started");
        const id = number.value.trim();
        if (id.length !== 9) {
            output.textContent = "Student ID is incorrect length. It should be 9 numbers long";
            console.log("check passed");
            return;
        };
    }
    // verify code is EVENT131
})