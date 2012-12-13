$(document).ready(function () {
//    fancybox
    $("a.gallery").fancybox();

//    timer
    $('#enter_link a').click(function () {
        createOverlay();
        $('#auth_form').show();
        $('#reg_form').hide();
        return false;
    });

    $('.reg_link').click(function () {
        createOverlay();
        $('#reg_form').show();
        $('#auth_form').hide();
        return false;
    });

    function createOverlay() {
        var height = $(document).height();
        var width = $(document).width();
        var width2 = (width / 2) - 316;
        $('#overlay').show();
        $('#popup_window').show();
        $('#popup_window').css('left', width2);
        $('#overlay').css('height', height);
        $('#overlay').css('width', width);
    }

    $('#overlay').click(function () {
        $('#overlay').hide();
        $('#popup_window').hide();
        return false;
    });
    $('#popup_window a.close').click(function () {
        $('#overlay').hide();
        $('#popup_window').hide();
        return false;
    });

    var d = new Date;
    $('#countdown_dashboard_60').countDown({

        targetDate:{

            'day':d.getDate(),
            'month':d.getMonth() + 1,
            'year':d.getFullYear(),
            'hour':23,
            'min':59,
            'sec':59
        },
        omitWeeks:true
    });


//    main
    $(function () {
        $('.slides').slides({
            preload:true,
            preloadImage:'images/loading.gif',
            play:5000,
            pause:2500,
            hoverPause:true
        });
    });

// modal
    $('.services li').click(function () {
        $num_vis = $('.modal-services:visible').length;
        if ($num_vis == 0)    $(this).find('.modal-services').fadeIn(200);
        return false;
    });
    $('.modal-services .modal-close, .modal-services .modal-bg').click(function () {
        $(this).closest('.modal-services').fadeOut(200);
    });

});


$('.callback').live('click', function () {
    $('.modal-callback').fadeIn(200);
    return false;
});
$('.modal-callback .modal-close, .modal-callback .modal-bg').live('click', function () {
    $('.modal-callback').fadeOut(200);
});

function formValid(form, submit) {

    $form_id = form;
    $name = $('.js_name' + form).val();
    $bq_name = $('.js_bq_name' + form).val();
    $phone = $('.js_phone' + form).val();
    $email = $('.js_email' + form).val();
    $secret = $('.js_lastname' + form).val();


    if (!$name.length > 0)
        $('#form_' + form + ' .rslt').html("Нужно заполнить поле \"ФИО\"");
    else if (!$phone.length > 0)
        $('#form_' + form + ' .rslt').html("Нужно заполнить поле \"Телефон\"");
    else if (!$email.length > 0)
        $('#form_' + form + ' .rslt').html("Нужно заполнить поле \"E-mail\"");
    else
        $('#form_' + form + ' .rslt').html("");

    if (submit == "Y" && $('#form_' + form + ' .rslt').html() == "") {
        $('#form_' + form + ' .btn').append($('.js_wait_block').html());
        $('form .js_wait').fadeIn();
        $.ajax({
            type:'post', //тип запроса: get,post либо head
            url:'mail.php', //url адрес файла обработчика
            data:{'bqname':$bq_name, 'name':$name, 'phone':$phone, 'email':$email, 'form_id':$form_id, 'secret':$secret}, //параметры запроса
            response:'text', //тип возвращаемого ответа text либо xml
            header:{'Content-Type':'application/x-www-form-urlencoded; charset=utf-8', 'Referer':location.href},
            success:function (data) {
                if (data == "1")
                    $('#form_' + form + ' .rslt').html('<font color="green">Спасибо за заявку! В ближайшее время наш менеджер свяжется с Вами.</font>');
                $('.js_wait').fadeOut();
                $('#form_' + form + ' .btn .js_wait').remove();
            }
        });
    }
}

function callback() {
    $callback = $('.js_callback').val();
    $secret = $('.js_callback_name').val();

    if (!$callback.length > 0)
        $('.result').html("Нужно заполнить поле \"Телефон\"");
    else
        $('.result').html("");

    if ($('.result').html() == "") {
        $('#callback_form .btn').append($('.js_wait_block').html());
        $('#callback_form .btn .js_wait').css('right', '20px');
        $('#callback_form .btn .js_wait').fadeIn();
        $.ajax({
            type:'post',
            url:'mail.php',
            data:{'callback':$callback, 'form_id':"dfsdf^%$6y23hj", 'secret':$secret},
            response:'text',
            header:{'Content-Type':'application/x-www-form-urlencoded; charset=utf-8', 'Referer':location.href},
            success:function (data) {
                if (data == "1")
                    $('.result').html('<font color="green">Спасибо за заявку! В ближайшее время наш менеджер свяжется с Вами.</font>');
                $('.js_wait').fadeOut();
                $('.on-line-zakaz .js_wait').remove();
            }
        });
    }
}

function callback1() {
    $callback = $('.js_callback1').val();
    $secret = $('.js_callback_name1').val();

    if (!$callback.length > 0)
        $('.result').html("Нужно заполнить поле \"Телефон\"");
    else
        $('.result').html("");

    if ($('.result').html() == "") {
        $('#callback_form .btn').append($('.js_wait_block').html());
        $('#callback_form .btn .js_wait').css('right', '20px');
        $('#callback_form .btn .js_wait').fadeIn();
        $.ajax({
            type:'post',
            url:'mail.php',
            data:{'callback':$callback, 'form_id':"dfsdf^%$6y23hj", 'secret':$secret},
            response:'text',
            header:{'Content-Type':'application/x-www-form-urlencoded; charset=utf-8', 'Referer':location.href},
            success:function (data) {
                if (data == "1")
                    $('.result').html('<font color="green">Спасибо за заявку! В ближайшее время наш менеджер свяжется с Вами.</font>');
                $('.js_wait').fadeOut();
                $('.on-line-zakaz .js_wait').remove();
            }
        });
    }
}