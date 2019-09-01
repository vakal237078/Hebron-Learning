let getUserName = prompt("Enter your login");
let getUserPassword;
let date = new Date();

if (getUserName === "" || getUserName === null) {
    alert("Canceled");
} else if (getUserName.length < 4) {
    alert("I don't know any users having name length less than 4 symbols");
} else if (getUserName !== "User") {
    alert("I don’t know you");
} else if (getUserName === "user") {
    getUserPassword = prompt("Enter your password");

    if (getUserPassword === "" || getUserPassword === null) {
        alert("Canceled");
    } else if (getUserPassword !== "SuperUser") {
        alert("Wrong password");
    } else if (getUserPassword === "SuperUser") {
        console.log(date.getHours());
        if (date.getHours() < 20) {
            alert("Good day!")
        } else {
            alert("Good evening!")
        }
    }
}




