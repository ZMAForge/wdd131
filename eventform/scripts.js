const form = document.querySelector("form");
const type = document.querySelector("#type");
const code = document.querySelector("#code");
const numberContainer = document.getElementById("studentId")
const codeContainer = document.getElementById("generalCode")
const number = document.querySelector("#number");
const output = document.querySelector("#output");

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

function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
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
    if (isPastDate(date)) {
        output.textContent = "Please choose a later date.";
        return;
    }

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
    if (type === "guest") {
        console.log("Code check started");
        const input = code.value.trim();
        if (input !== "EVENT131") {
            output.textContent = "Code Invalid. Please Try Again";
            console.log("check passed");
            return;
        }
    }

    output.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${fname} ${lname}</p>
    <p>${type}</p>
    <p>${date}</p>
    `;
    form.reset();

})