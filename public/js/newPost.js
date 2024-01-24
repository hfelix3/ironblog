// CREATE FORM HANDLER FUNCTION THAT DOCUMENT QUERY SELECT INPUT FIELDS AND BODY FROM NEWPOST.HANDLEBARS
const postFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the edit post class section
  const title = document.querySelector('#title').value.trim();
  const body = document.querySelector('#newPostInput').value.trim();

  if (title && body) {
    const response = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({ title, body }),
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
  .querySelector('.edit')
  .addEventListener('submit', postFormHandler);
