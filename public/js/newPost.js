// CREATE FORM HANDLER FUNCTION THAT DOCUMENT QUERY SELECT INPUT FIELDS AND BODY FROM NEWPOST.HANDLEBARS
const postFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the edit post class section
  const postTitle = document.querySelector('#title').value.trim();
  const newPostInput = document.querySelector('#newPostInput').value.trim();

  if (postTitle && commentInput) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ postTitle, newPostInput }),
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
  .addEventListener('submit', postFormHandler);
