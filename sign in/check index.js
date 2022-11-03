function myFunction(event) {
var u = document.getElementById("username").value;
var p1 = document.getElementById("password").value;

if(u== "") {
    alert("Vui lòng nhập tên!");
    event.preventDefault();
}
else if (p1 == "") {
    alert("Vui lòng nhập mật khẩu!");
    event.preventDefault();
}
else if(u == "admin" && p1 == "admin"){
    button.action='../index.html';
}else{
    button.action='../index.html';
}
};
var button = document.getElementById("form");
button.addEventListener('submit',myFunction);