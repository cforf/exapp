//JQuery
$(document).ready(function () {
    //$('body').prepend('jquery works!');
    showData();
    //input date
    var $dateField = $('#date');
    var $numField = $('#nums');
    var $btnAdd = $('#save_data');
    var $showSection = $('#show_data');
    var $formData = $('#form');
    var linef = ' ................................ ';

    $dateField.val(getFormatDate());
    $numField.attr('class', 'before_input');

    function getFormatDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        today = today.getFullYear() + '-' + (mm < 10 ? '0' + mm : mm) + '-' + (dd < 10 ? '0' + dd : dd);
        console.log('today = ' + today);

        return today;
    }

    function showData() {
        //$('#output').empty();
        $.ajax({
            type: 'GET',
            url: 'query.php',
            success: function (response) {
                $.each(response, function (index) {

                    $showSection.append(response[index][1] + linef + response[index][2] + '<br>');
                });
                // console.log(response);
            }
        });
    }

    function clearFields() {
        $numField.attr('class', 'before_input').val('').focus();
        console.info('num field clear!');
    }

    $btnAdd.on({
        'mouseenter': function () {
            $(this).css({
                'margin-top': '-5px',
                'cursor': 'pointer',
                'box-shadow': '0px 8px 2px rgba(0,0,0,.25)'
            });
            $showSection.css('margin-top', '35px');
            // console.log('mouse over btn');
        },
        'mouseleave': function () {
            $(this).css({
                'margin-top': '0px',
                'box-shadow': 'none'
            });
            $showSection.css('margin-top', '30px');
            // console.log('mouse out btn');
        },
        'mousedown': function () {
            $(this).css({
                'margin-top': '0px',
                'box-shadow': 'none'
            });
            $showSection.css('margin-top', '30px');
            //console.log('mouse down btn');
        }
    });
    $numField.on('keypress', function () {
        $(this).removeAttr('class');
    });
    $formData.on('submit', function (e) {
        e.preventDefault(); //Prevent the default action(submit)
        //console.info(e.target);
        // submitToDB(e, showSection);
        clearFields();
    });


});

