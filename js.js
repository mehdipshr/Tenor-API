const container = document.getElementById('container');
const btn = document.getElementById('btn');
var search = document.getElementById('search');



btn.addEventListener('click', function() {
    var getSearch = document.getElementById('search').value;
    container.innerHTML = '';
let myRequest = new XMLHttpRequest();
myRequest.open('GET' ,'https://api.tenor.com/v1/search?q='+getSearch+'&key=004ZUJCK5PJU')
myRequest.responseType = 'json'
myRequest.onreadystatechange = function(){
    if( myRequest.readyState === 4 && myRequest.status === 200){
        console.log(myRequest.response.results)
        printData(myRequest.response.results)
    }
}
myRequest.send()
})

function printData(data){
    for(var i=0; i<data.length; i++){
        let newUser = document.createElement("div")
        newUser.setAttribute('class', 'character')
        
        let userImage = document.createElement('img')
        userImage.setAttribute('src', data[i].media[0].gif.url)
        //userImage.setAttribute('alt', data[i].fullName)

        newUser.appendChild(userImage)
        container.appendChild(newUser)
    }
}