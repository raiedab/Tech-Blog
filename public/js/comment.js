const commentHandler = async (event) => {
  event.preventDefault();

  const body = document.querySelector('#comment').value.trim();
  const blog_id = document.querySelector('textarea').dataset.id;

  if (body) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ body, blog_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('#commentBtn').addEventListener('click', commentHandler);
