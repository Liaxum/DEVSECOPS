const params = new URLSearchParams(window.location.search);
const titleElement = document.getElementById('title');
const name = params.get('name');

titleElement.innerHTML = `Hello ${name}`;