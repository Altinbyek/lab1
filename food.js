// food hesgiig table deer hevlej bgaa js
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    myFunction(this);
    } };
    xhttp.open("GET", "food.xml", true);
    xhttp.send();
   }
   function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Name</th><th>Price</th><th>Desc<th>Calories</th><th>Code</th></tr>";
    var x = xmlDoc.getElementsByTagName("Food");
    for (i = 0; i <x.length; i++) {
    table += "<tr><td>" +
    x[i].getElementsByTagName("Name")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Price")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Desc")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Calories")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Code")[0].childNodes[0].nodeValue +
    "</td></tr>";}
    document.getElementById("demo").innerHTML = table;
   }
   // drinks bolon food gesen tabliig haah hesgiin js
   function clear1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    clear(this);
    } };
    xhttp.open("GET", "food.xml", false);
    xhttp.send();
   }
   function clear(xml){
       document.getElementById("demo").innerHTML = "";
   }
   // drinks.xml gesen filiig 0-4 hoorond uncij bgaa heseg
   function drink() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    drinks(this);
    } };
    xhttp.open("GET", "drinks.xml", true);
    xhttp.send();
   }
   // drinksiig html coder deerh table deer hevlej bgaa hesgiin code
   function drinks(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Name</th><th>Price</th><th>Size</th><th>Code</th></tr>";
    var x = xmlDoc.getElementsByTagName("Drinks");
    for (i = 0; i <x.length; i++) {
    table += "<tr><td>" +
    x[i].getElementsByTagName("Name")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Price")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Size")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Code")[0].childNodes[0].nodeValue +
    "</td></tr>";}
    document.getElementById("demo").innerHTML = table;
   }
   function zahialgaUguh(){
         if(document.zhlg_uguh.value == ""){
            alert("Ta zahialgiin code oruulj bj zahialga uguh bolomjtoi");
         }
   }
   