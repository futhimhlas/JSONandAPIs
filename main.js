const baseURL = "https://ci-swapi.herokuapp.com/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();   // Here we are creating a new instance of the htmlhttprequest object xml - xtensible markup language

    xhr.open("GET", baseURL + type +"/");  // OPen method with the first argument being "GET <-used when we retrieve data from a server also standard when a browser opens a webpage" (several diff arguments we can pass in)
    xhr.send();  // This method sends our request

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));

        }
    };
}

function getTableHeaders(obj) {
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key){
        tableHeaders.push(`<td>${key}</td>`);
    });
    return `<tr>${tableHeaders}</tr>`;
}

function writeToDocument(type) {
    var tableRows = [];
    var el = document.getElementById("data");
    el.innerHTML = "";  // This will clear the element every time the button is clicked
    
    getData(type, function(data){
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item){
            var dataRow = [];

            Object.keys(item).forEach(function(key){
                var rowData = item[key].toString();
                var truncatedData = rowData.substring(0, 15)
                dataRow.push(`<td>${truncatedData}</td>`)
            });
            tableRows.push(`<tr>${dataRow}</tr>`);
            
            // el.innerHTML += "<p>" + item.name + "</p>"  // this formats our results nicely (results was taken from the unpacked json object in the console using console.dir)
        });
        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`
    });
}