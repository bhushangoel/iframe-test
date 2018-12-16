(() => {
    setcookie = () => {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                document.getElementById("demo").innerHTML = xhttp.responseText;
            }
        };
        // xhttp.withCredentials = true;
        xhttp.open("POST", "https://me1410.herokuapp.com/add/cookie", true);
        xhttp.withCredentials = true;
        xhttp.send();
    }
})();