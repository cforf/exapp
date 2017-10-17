//JQuery
$(document).ready(function() {

    //input date
    var $dateField = $('#date');
    var $numField = $('#nums');
    var $btnAdd = $('#save_data');
    var $showSection = $('#show_data');
    var $formData = $('#form');
    var $datetip = $('#date_tip');
    var $numstip = $('#nums_tip');
    var linef = ' ................................ ';

    $dateField.val(getFormatDate());
    $numField.attr('class', 'before_input');

    showData();

    function getFormatDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        today = today.getFullYear() + '-' + (mm < 10 ? '0' + mm : mm) + '-' + (dd < 10 ? '0' + dd : dd);
        console.log('today = ' + today);

        return today;
    }

    function showData() {
        $showSection.html('');
        $.ajax({
            type: 'GET',
            url: 'query.php',
            success: function(response) {
                $.each(response, function(index) {
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
        'mouseenter': function() {
            $(this).css({
                'margin-top': '-5px',
                'cursor': 'pointer',
                'box-shadow': '0px 8px 2px rgba(0,0,0,.25)'
            });
            $showSection.css('margin-top', '35px');
            // console.log('mouse over btn');
        },
        'mouseleave': function() {
            $(this).css({
                'margin-top': '0px',
                'box-shadow': 'none'
            });
            $showSection.css('margin-top', '30px');
            // console.log('mouse out btn');
        },
        'mousedown': function() {
            $(this).css({
                'margin-top': '0px',
                'box-shadow': 'none'
            });
            $showSection.css('margin-top', '30px');
            //console.log('mouse down btn');
        }
    });
    $numField.on('keypress', function() {
        $(this).removeAttr('class');
    });

    function submitFormData() {

        $.ajax({
            type: $formData.attr('method'),
            url: $formData.attr('action'),
            data: $formData.serialize(),
            success: function() {
                showData();
            }
        });

        clearFields();
    }

    //validation form by Validation jquery plugin
    $formData.validate({
        debug: true,
        rules: {
            date_input: {
                required: true,
                maxlength: 10,
                date: true
            },
            number_data: {
                required: true,
                number: true,
                minlength: 6,
                maxlength: 6,
                digits: true
            }
        },
        messages: {
            date_input: {
                required: "This field is required!",
                date: "Not a valid date!",
                maxlength: "Not a valid date! Max 10 symbols"
            },
            number_data: {
                required: "This field is required!",
                minlength: "Min length - 6 digits",
                maxlength: "Max length - 6 digits",
                digits: "Input number by pattern 012345 (6 digits)"
            }
        },
        errorPlacement: function(error, element) {
            error.addClass('tooltiptext');
            if (element.is("#date")) {
                error.appendTo($datetip);
            } else {
                error.appendTo($numstip);
            }
        },
        errorElement: "span",
        submitHandler: function($formData) {
            submitFormData();
        }
    });
});