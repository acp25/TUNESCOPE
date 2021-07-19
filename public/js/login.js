console.log("connected");
const loginFormHandler = async (event) => {
  console.log("connected");
  event.preventDefault();

  const username = document.getElementById("username-login").value.trim();
  const password = document.getElementById("password-login").value.trim();

  if (username && password) {
    console.log(username);
    console.log(password);
    const response = await fetch("/user/login", {
      method: "POST",
      body: JSON.stringify({username, password}),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      // If successful, redirect the browser to the profile page
      console.log("response is ok");
      document.location.replace("/explore");
    } else {
      alert(response.statusText);
      console.log("er");
    }
  }
};

document
  .getElementById("loginInBtn")
  .addEventListener("click", loginFormHandler);
