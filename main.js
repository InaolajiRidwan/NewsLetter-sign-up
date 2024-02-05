let input = document.getElementById("email");
let errorMessage = document.getElementById("error");
let successMessage = document.getElementById("success");
let cardContent = document.getElementById("card");
let imageConfusion = document.getElementById("imgconfusion");

function loginbtn() {
  if (!input.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    errorMessage.style.display = "block";
    input.style.borderColor = "red"
  } else {
    successMessage.style.display = "block";
    cardContent.style.display = "none";
    document.getElementById("show").innerHTML = input.value;
  }
}

function successbtn() {
  cardContent.style.display = "";
  successMessage.style.display = "none";
  input.value = "";
}
