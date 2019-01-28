// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => res.send('Hello World'));

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const followersContainer = document.querySelector(".main__profile-followers");
const idContainer = document.querySelector(".main__profile-id");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");

const client_id = "Iv1.d1278050b5188146";
const client_secret = "be297c47b173976d0698fbbd629dd44b69fa83e7";

const fetchUsers = async (user) => {
  const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);

  const data =  await api_call.json();
  return {data: data};
};

const showData = () => {
  fetchUsers(inputValue.value).then((res) =>{
    console.log(res);
    nameContainer.innerHTML = `Name: <span class="main__profile-value">${res.data.name}</span>`;
    unContainer.innerHTML = `Username: <span class="main__profile-value">${res.data.login}</span>`;
    followersContainer.innerHTML = `Followers: <span class="main__profile-value">${res.data.followers}</span>`;
    idContainer.innerHTML = `Id: <span class="main__profile-value">${res.data.id}</span>`;
    reposContainer.innerHTML = `Repos: <span class="main__profile-value">${res.data.public_repos}</span>`;
    urlContainer.innerHTML = `URL: <span class="main__profile-value">${res.data.url}</span>`;
  });
};

searchButton.addEventListener("click", () => {
  showData();
});
