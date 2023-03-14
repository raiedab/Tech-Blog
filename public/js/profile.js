const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#blog-name').value.trim();
  const description = document.querySelector('#blog-desc').value.trim();

  name && description ? (
    await fetch('/api/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description }),
    }).ok ? document.location.replace('/profile') : alert('Failed to create blog')
  ) : null;
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/blogs/${id}`, { method: 'DELETE' });
    response.ok ? document.location.replace('/profile') : alert('Failed to delete blog');
  }
};

document.querySelector('.new-blog-form').addEventListener('submit', newFormHandler);
document.querySelector('.blog-list').addEventListener('click', delButtonHandler);
