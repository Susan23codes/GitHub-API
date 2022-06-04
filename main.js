let gitHubUrl = "https://api.github.com/users/Susan23codes"


fetch (gitHubUrl, {
    method: "GET",
    headers: {'Content-Type': 'application/json'},
})
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        // console.log("Response from Github", data)
        // console.log(data.login)
        buildProfile(data)
})

const profileContainer = document.querySelector('.profile_Container')
let avatarContainer = document.querySelector('.name_and_avatar')

function buildProfile(data) {
    let myPic = document.createElement("img")
    myPic.classList.add("pic")
    myPic.setAttribute("src", data.avatar_url)
    avatarContainer.appendChild(myPic)

    // 
    let myName = document.createElement("p") // <p></p>
    myName.classList.add("name") // <p class="name"></p>
    myName.innerText = `${data.name}`
    avatarContainer.appendChild(myName)
    profileContainer.appendChild(avatarContainer)

    let myLocation = document.createElement("p")
    myLocation.classList.add("location")
    myLocation.innerText = "Location: " + `${data.location}`
    profileContainer.appendChild(myLocation)

    let myUserName = document.createElement("p")
    myUserName.classList.add("userName")
    myUserName.innerText = "GitHub username: " + `${data.login}`
    profileContainer.appendChild(myUserName)
    
    let urlContainer = document.createElement("p")
    urlContainer.classList.add("url_Container")
    let myUrl1 = document.createElement("p")
    myUrl1.classList.add("url1")
    myUrl1.innerText = "GitHub URL : "
    urlContainer.appendChild(myUrl1) 
    // profileContainer.appendChild(urlContainer)

    let myUrl = document.createElement("a")
    myUrl.classList.add("url")
    myUrl.innerText = "Susan23codes"
    myUrl.setAttribute("href", data.html_url)
    urlContainer.appendChild(myUrl) 
    profileContainer.appendChild(urlContainer)
    
}

let repoUrl = "https://api.github.com/users/Susan23codes/repos"

const repoCard = document.querySelector(".repo_Card") //making a new div for the repo names because sometimes the repo names were getting placed at the top of the other div and sometimes at the bottom when I would refresh the page, which I assume is because one fetch request is working faster one time and the other one is working faster the other time.  So I made a new div so it's always at the bottom.

fetch (repoUrl, {
    method: "GET",
    headers: {'Content-Type': 'application/json'},
})
    .then(function (response) {
        return response.json()
    })
    .then(function (repoArray1) {
        console.log(repoArray1)
        buildRepo(repoArray1)
})



function buildRepo(repoArray2) {
    
    let githubRepoName = document.querySelector(".repo_name")
    let repoTitle = document.createElement("p")
    repoTitle.classList.add("repo_title")
    repoTitle.innerText = "GitHub Repos:"
    githubRepoName.appendChild(repoTitle)

    let names = []
    for (let repo of repoArray2){
        names.push(repo.name)
        // console.log(repo.name)

        let iconLinkP = document.createElement("p")

        let icon = document.createElement("i")
        icon.classList.add("fa-solid")
        icon.classList.add("fa-folder-open")
        iconLinkP.appendChild(icon)


        let repoName = document.createElement("a")
        repoName.classList.add("repo_name")
        repoName.innerText = repo.name
        repoName.setAttribute("href", repo.html_url)
        iconLinkP.appendChild(repoName)
        repoCard.appendChild(iconLinkP)

    }


}
// <a href="url" class="stuff">repo name</a>
//create <a> element and assign a variable - <a></a>
//that variable add class list - <a class="stuff"></a>
//variable.innerText==repo name - <a class="stuff">repo name</a>
// variable.setAttribute("href", url) - <a href=url class="stuff">repo name</a>
//appending variable to repo card

