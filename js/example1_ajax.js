var request = null;
var modify; //= document.getElementById('show_data');
var linef = ' ................................ ';

//---

function submitToDB(e, modifiedObject) {
    var subForm = e.target;
    var subData = new FormData(subForm);
    modify = modifiedObject;

    var xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        //console.log('== success! ==');

        createRequest();
        getDataAjax(modify);
    };
    xhttp.open(subForm.method, subForm.action, true);
    xhttp.send(subData);
    //console.info(subForm.method);
}

function createRequest() {

    try {
        request = new XMLHttpRequest();
    } catch (e) {
        try {
            request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                request = null;
            }
        }
    }

    if (request === null) alert('Error creating request object!');
}

function getDataAjax(modifiedObject) {
    modify = modifiedObject;
    var url = "query.php";
    request.open('GET', url); //true by default -  asynchronised
    request.setRequestHeader("content-type", "application/json");
    request.onreadystatechange = theHTTPReponse;
    request.send();
}

function theHTTPReponse() {
    if (request.readyState === 4) {
        if (request.status === 200) {
            //console.info(request.responseText);
            var jcont = JSON.parse(request.responseText);
            modify.innerHTML = '';

            for (var rec in jcont) {
                modify.innerHTML += '<div id="rec">' + jcont[rec][1] + linef + jcont[rec][2] + '</div>';
            }
            //console.log(jcont);
        }
    } else {
        modify.innerHTML = '<img src="images/loading.gif">';
    }
}