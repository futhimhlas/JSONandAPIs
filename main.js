var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
    }
};
// This function is a listener. Checking the variable xhr's state

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.send();