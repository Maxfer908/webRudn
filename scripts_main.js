function regClk() {
    document.getElementById("frame").innerHTML = "<iframe src=\"./reg.html\" width=\"320\" height=\"430\"></iframe>";
}
function logClk() {
    document.getElementById("frame").innerHTML = "<iframe src=\"./log.html\" width=\"320\" height=\"430\"></iframe>";
}
function qizClk() {
    document.getElementById("frame").innerHTML = "<iframe src=\"./qiz.html\" width=\"320\" height=\"650\"></iframe>";
}
function FormValidation() {
    confirm("Проверьте правильность заполненных данных")
    var email = document.getElementById("email")

    if(ValidateEmail(email))
    {
        return false;
    }

    function ValidateEmail(email) {
        var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.value.match(emailformat)) {
            return true;
        } else {
            alert("Invalid email address")
            email.focus();
            return false;
        }
    }
}
var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};