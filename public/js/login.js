const formHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup')?.value?.trim();
  const email = document.querySelector('#email-signup')?.value?.trim();
  const password = document.querySelector('#password-signup')?.value?.trim() || 
                   document.querySelector('#password-login')?.value?.trim();

  if (name && email && password) {
    const response = await fetch('/api/users' + (event.target.className.includes('login') ? '/login' : ''), {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelectorAll('.form').forEach((form) => {
  form.addEventListener('submit', formHandler);
});
