const getUsers = () => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('loadend', (event) => {
    console.log(event.target.response);
  })

  xhr.open('GET', 'http://localhost:3000/users');
  xhr.send();
}
