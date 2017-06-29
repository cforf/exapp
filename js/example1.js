var example1 = (function () {

    // Firefox 1.0+
    //var isFirefox = typeof InstallTrigger !== 'undefined';

    var dateField = document.getElementById('date');

    var numField = document.getElementById('nums');

    var btnAdd = document.getElementById('save_data');

    var showSection = document.querySelector('.show');

    var formData = document.getElementById('form');


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

    /*if (isFirefox) {
        today = dd + '.' + mm + '.' + yyyy;
    } else {
        today = yyyy + '-' + mm + '-' + dd;
    }*/


    today = today = yyyy + '-' + mm + '-' + dd;

    dateField.setAttribute('value', today);

    console.log(dateField.getAttribute('value'));



    //btn ADD
    function addData() {

        if (formData.checkValidity()) {
            console.log('valid data');

            //send data
        } else {
            console.log('wrong data');
        }
    }

    btnAdd.addEventListener('mouseenter', function () {
        this.style.marginTop = '-5px';
        this.style.cursor = 'pointer';
        this.style.boxShadow = '0px 8px 2px rgba(0, 0, 0, .25)';
        showSection.style.marginTop = '45px';
    });

    btnAdd.addEventListener('mouseout', function () {
        this.style.boxShadow = 'none';
        this.style.marginTop = '0px';
        showSection.style.marginTop = '40px';
    });

    btnAdd.addEventListener('mousedown', function () {
        this.style.boxShadow = 'none';
        this.style.marginTop = '0px';
        showSection.style.marginTop = '40px';
    });

    btnAdd.addEventListener('click', addData);

})();
