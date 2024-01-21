const newCommentHandler = async (event) => {
  event.preventDefault();

  // Collect values from the
  const newComment = document.querySelector('#newCommentId').value.trim();

  if (newComment) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ newComment }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to
      document.location.replace('/');
      res.status(200).json();
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.comment-card')
  .addEventListener('submit', newCommentHandler);
