//Sign Up function

function signUp(e) {
  event.preventDefault();
  //   console.log("Working");
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let user = {
    username: username,
    email: email,
    password: password,
  };

  let json = JSON.stringify(user);
  localStorage.setItem(username, json);
  console.log("User Added");
}

function logIn(e) {
  event.preventDefault();
  //   console.log(123);

  let username = document.getElementById("userName").value;
  let password_login = document.getElementById("password_login").value;

  let user = localStorage.getItem(username);
  let data = JSON.parse(user);
  //   console.log(data);

  if (user == null) {
    alert("Wrong Username!");
  } else if (username == data.username && password_login == data.password) {
    alert("Loggin!");
    location.href = "./main.html";
  } else {
    alert("Wrong Password!");
  }
}
