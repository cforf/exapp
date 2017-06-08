var example1 = (function () {

    // Firefox 1.0+
    //var isFirefox = typeof InstallTrigger !== 'undefined';

    var dateField = document.getElementById('date');

    var numField = document.getElementById('nums');



    console.log(dateField.getAttribute('value'));


    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    //today = mm + '-' + dd + '-' + yyyy;

    /*if (isFirefox) {
        today = dd + '.' + mm + '.' + yyyy;
    } else {
        today = yyyy + '-' + mm + '-' + dd;
    }*/

    today = dd + '.' + mm + '.' + yyyy;

    dateField.setAttribute('value', today);

    console.log(dateField.getAttribute('value'));



    numField.addEventListener('focus', function () {
        numField.style.fontSize = "2em";
    });
})();
