const logout = async () => {
    const response = await fetch("/",{
        method:"GET",
        headers: { 'Content-Type': 'application/json' },
    });
//     const response = await fetch('/user/logout', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//     });
//   console.log(response);
//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert('Failed to log out.');
//     }
  };
  
  document.getElementById('logout').addEventListener('click', logout);