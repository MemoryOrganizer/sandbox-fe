document.getElementById('upload').addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.target);
  fetch('/', {
    method: 'POST',
    body: form
  })
    .then(res => res.json())
    .then(console.log);
});
