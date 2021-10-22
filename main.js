const linksSocialMedia = {
  github: 'uesly',
  linkedin: 'in/uesly',
  facebook: 'well.wesley.1998',
  instagram: '_uesly_',
  twitter: 'well_wesley16'
}

function changeSocialMediaLinks() {
  //document.getElementById('userName').textContent = 'Olivia' fazendo o mesmo que o de baixo V
  //userName.textContent = 'Marcelo'

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    //alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()

/*ARROW FUNCTIONS
 function nomeDaFuncao(argumentos){
   codigo da função
}

argumento => {

}
*/
