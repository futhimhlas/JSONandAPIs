function getData(cb) {
    var xhr = new XMLHttpRequest();   // Here we are creating a new instance of the htmlhttprequest object xml - xtensible markup language

    xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");  // OPen method with the first argument being "GET <-used when we retrieve data from a server also standard when a browser opens a webpage" (several diff arguments we can pass in)
    xhr.send();  // This method sends our request

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));

        }
    };
    // This function is a listener. Checking the variable xhr's state
}

getData(function(data){
    console.log(data);
});