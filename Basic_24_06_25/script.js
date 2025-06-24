function getProfile(defaultUser) {
  const username = defaultUser || document.getElementById("username").value;
  fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("profileCard").style.display = "block";
      document.getElementById("avatar").src = data.avatar_url;
      document.getElementById("name").textContent = data.name?.toUpperCase() || data.login;
      document.getElementById("bio").textContent = data.bio || "No bio available.";
      document.getElementById("followers").textContent = `${data.followers} followers`;
      document.getElementById("following").textContent = `${data.following} following`;
      document.getElementById("repos").textContent = `${data.public_repos} repos`;
      fetch(`https://api.github.com/users/${username}/repos`)
        .then(res => res.json())
        .then(repos => {
          const repoList = document.getElementById("repoList");
          repoList.innerHTML = "";
          repos.forEach(repo => {
            const li = document.createElement("li");
            li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
            repoList.appendChild(li);
          });
        });
    })
    .catch(() => {
      alert("User not found!");
    });
}
