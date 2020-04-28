const getUsers = () => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('loadend', (event) => {
    console.log(event.target.response);
  })

  xhr.open('GET', 'http://localhost:3000/users');
  xhr.send();
}

const getUser = (num) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('loadend', (event) => {
    console.log(event.target.response);
  })
  xhr.open('GET', `http://localhost:3000/users/${num}`);
  xhr.send();
}
const getFriends = (num) =>{
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('loadend', (event) => {
    const objText =event.target.response;
    const obj = JSON.parse(objText)
    // const friend =obj.friends
    console.log(obj.friends)
  })

  xhr.open('GET', `http://localhost:3000/users/${num}`);
  xhr.send();

}

const postUser = (parameter) =>{
  const {name, age, eyeColor} = parameter;
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('loadend', (event) => {
    const objText = event.target.response;
    const obj = JSON.parse(objText)
    const newUser = {
      name,
      age,
      eyeColor,
      index: objText.length,
    }
    obj.push(newUser);
    const updatedUsers = JSON.stringify(obj, null, 2);

  })
  xhr.open('POST', `http://localhost:3000/users`);
  xhr.send();

}
