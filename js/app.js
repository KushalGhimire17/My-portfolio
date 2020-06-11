// fetch github data
fetch('https://api.github.com/users/KushalGhimire17')
.then(response => response.json())
.then(function(data){
    console.log(data);

    let followersCount = data['followers']
    let followersInfo = `I have been followed by ${followersCount} awesome people on github.`
    document.getElementById('profileImage').src = data['avatar_url']
    document.getElementById('fullName').textContent = data['name']
    document.getElementById('bio').textContent = data['bio']
    document.getElementById('followersInformation').textContent = followersInfo
    document.getElementById('githubLink').href = data['html_url']
    document.getElementById('mainContainer').hidden = false
    document.getElementById('loading').hidden = true
})

// fetch list of repos name
fetch('https://api.github.com/users/KushalGhimire17/repos')
.then(response => response.json())
.then(function(response) {
    // for(var index=0; index<response.length; index++) {
    //     data = response[index];
    //     console.log(data['html_url'])
    //     document.getElementById('reposURL').href = data['html_url']
    //     var pTag = document.createElement('p');
    //     pTag.innerHTML = data['name'];
    //     document.querySelector('#reposURL').appendChild(pTag);
    // }

    var htmlDiv = document.getElementById('repos');
    for(var index=0; index<response.length; index++) {
        data = response[index];
        console.log(data['html_url'])
        var anchor = "<a style='font-size: 18px;' href='" + data['html_url'] + "' target='_blank'>" + data['name'] +"</a><br>";
        htmlDiv.innerHTML+=anchor;
    }
})