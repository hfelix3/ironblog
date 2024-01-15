const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    // If successful, redirect the browser to the HOME page = '/'
    document.location.replace('/');
  } else {
    alert('Failed to log out.');
  }
};

console.log("logout element", document.querySelector('email-login'));
document.querySelector('#logout').addEventListener('click', logout);