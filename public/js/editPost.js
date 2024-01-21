// CREATE FORM HANDLER FUNCTION THAT DOCUMENT QUERY SELECT INPUT FIELDS AND BODY FROM EDITPOST.HANDLEBARS
const editPostFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the edit post class section
  const postTitle = document.querySelector('#title').value.trim();
  const commentInput = document.querySelector('#commentInput').value.trim();

  if (postTitle && commentInput) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ postTitle, commentInput }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to dashboard
      document.location.replace('/dashboard');
      res.status(200).json();
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.edit post')
  .addEventListener('submit', editPostFormHandler);
