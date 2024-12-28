// Get DOM elements
document.addEventListener('DOMContentLoaded', function(){
  const searchBtn = document.querySelector(".search-btn");
const usernameInput = document.getElementById("github-username");

async function githubProfile(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  card(data)
}


searchBtn.addEventListener('click', function(){
  textValue = usernameInput.value;
githubProfile(textValue)
  
})
})


function card (data){
  document.querySelector('.profile-card').innerHTML = `
  <div class="avatar" mage: url('${data.avatar_url}');"></div>
      <h2>${data.name}</h2>
      <p>${data.bio}</p>
      <div class="stats">
        <div>
          <span>Follower</span>
          <p>${data.followers}</p>
        </div>
        <div>
          <span>Following</span>
          <p>${data.following}</p>
        </div>
        <div>
          <span>Repo</span>
          <p>${data.public_repos}</p>
        </div>
      </div>
          <a class="view-profile" href="${data.html_url}" target="_blank" rel="noopener noreferrer">View Profile</a>

  `
}