var request = null;
var modify; //= document.getElementById('show_data');
var linef = ' ................................ ';

//---
//var fd = document.getElementById('form');

/*function submitToDB(e, modifiedObject) {
    var subForm = e.target;
    var subData = new FormData(subForm);
    modify = modifiedObject;

    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        console.log('== success! ==');

        createRequest();
        getDataAjax(modify);
    };
    xhttp.open(subForm.method, subForm.action, true);
    xhttp.send(subData);
    //console.info(subForm.method);
    //return false;//oldest variant preventDefault();
}*/

// fd.addEventListener('submit', function (e) {
//     e.preventDefault();//Prevent the default action(submit)
//     //console.info(e.target);
//     submitToDB(e);
// });

//---


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
    //if (request == null) alert('Error creating request object! ' + "\n" + err.name + ":" + err.message + "\n" + err.stack);
    if (request === null) alert('Error creating request object!');
}

// if (window.XMLHttpRequest) {
//     request = new XMLHttpRequest();
// } else {
//     request = new ActiveXObject("Microsoft.XMLHTTP");
// }

function getDataAjax(modifiedObject) {
    modify = modifiedObject;
    //var noCash = parseInt(Math.random() * 99999999999999999);
    //var url = "json.json";// + "?rand=" + noCash;
    var url = "query.php"; // from php
    request.open('GET', url); //true by default -  asynchronised
    request.setRequestHeader("content-type", "application/json");
    request.onreadystatechange = theHTTPReponse;
    request.send();
}

function theHTTPReponse() {
    if (request.readyState === 4) {

        //setTimeout(function () {
            if (request.status === 200) {
                //console.info(request.responseText);
                var jcont = JSON.parse(request.responseText);
                modify.innerHTML = '';

                for (var rec in jcont) {
                    modify.innerHTML += '<div id="rec">' + jcont[rec][1] + linef + jcont[rec][2] + '</div>'; //'<br>';
                }
                //console.log(jcont);
            }
        //}, 3000);

    } else {
        modify.innerHTML = '<img src="images/loading.gif">';
    }
}
