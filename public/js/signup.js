console.log("ehlo");

const signUp = async (event) => {
  event.preventDefault();
  const username = document.querySelector("#username_signup").value.trim();
  const email = document.querySelector("#email_signup").value.trim();
  const password = document.querySelector("#password_signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/user/signup", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      // If successful, redirect the browser to the profile page
      console.log("response is ok");
      document.location.replace("/explore");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector("#signupButton").addEventListener("submit", signUp);
