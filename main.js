$(document).ready(function () {
    const endpoint = 'https://api.github.com/users/Aleolivati'

    fetch(endpoint)
    .then(function(answer) {
        return answer.json() ;
    })
    .then(function (json) {
        console.log(json) ;

        $('#avatar-img').attr('src',json.avatar_url) ;
        $('#name').html(json.name) ;
        $('#username').html('@' + json.login) ;
        $('#repositories').html(json.public_repos) ;
        $('#followers').html(json.followers) ;
        $('#following').html(json.following) ;
        $('#link-github').attr('href',json.html_url) ;
    })
})