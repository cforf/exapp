var example1 = (function () {

    //preparing for input Data
    function prepareInput() {

        var dateField = document.getElementById('date');
        var numField = document.getElementById('nums');
        var btnAdd = document.getElementById('save_data');
        var showSection = document.getElementById('show_data');
        var formData = document.getElementById('form');

        (function firstLoads() {
            //working with date-->
            console.log(dateField.getAttribute('value'));
            dateField.setAttribute('value', getFormatDate());
            console.log(dateField.getAttribute('value'));
            numField.setAttribute('class', 'before_input');

            createRequest();
            getDataAjax(showSection);
        })();

        function getFormatDate() {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!

            today = today.getFullYear() + '-' + (mm < 10 ? '0' + mm : mm) + '-' + (dd < 10 ? '0' + dd : dd);

            return today;
        }

        //btn ADD
        function addData() {

            if (formData.checkValidity()) {
                console.log('valid data');

                //send data
            } else {
                console.log('wrong data');
            }
        }

        function clearFields() {
            numField.value = '';
            numField.setAttribute('class', 'before_input');
            numField.focus();
        }

        btnAdd.addEventListener('mouseenter', function () {
            this.style.marginTop = '-5px';
            this.style.cursor = 'pointer';
            this.style.boxShadow = '0px 8px 2px rgba(0, 0, 0, .25)';
            showSection.style.marginTop = '35px';
        });

        btnAdd.addEventListener('mouseout', function () {
            this.style.boxShadow = 'none';
            this.style.marginTop = '0px';
            showSection.style.marginTop = '30px';
        });

        btnAdd.addEventListener('mousedown', function () {
            this.style.boxShadow = 'none';
            this.style.marginTop = '0px';
            showSection.style.marginTop = '30px';
        });

        // btnAdd.addEventListener('click', addData);
        numField.addEventListener('keypress', function () {
            numField.removeAttribute('class');
        });

        formData.addEventListener('submit', function (e) {
            e.preventDefault(); //Prevent the default action(submit)
            //console.info(e.target);
            submitToDB(e, showSection);
            clearFields();
        });


    }

    document.addEventListener('DOMContentLoaded', prepareInput);
})();
