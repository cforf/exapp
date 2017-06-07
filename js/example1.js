var example1 = (function () {

    var dateField = document.getElementById('date');

    console.log(dateField.getAttribute('value'));

    dateField.setAttribute('value', '2017-06-07');

    console.log(dateField.getAttribute('value'));
})();
