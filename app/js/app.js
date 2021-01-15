document.addEventListener("DOMContentLoaded", function() {
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
    });

    $('a[href="#modal"], a[href="#modal-success"]').click(function(event) {
        event.preventDefault();
        $(this).modal({
            fadeDuration: 350,
            closeClass: 'icon-remove',
            closeText: '&times;'
        });
    });

    let rellax = new Rellax('.par-hero');

    let mainForm = $('form.main-form');

// Успешная отправка формы
    mainForm.on('success.sml', function() {

        $('#modal-success').modal({
            fadeDuration: 350,
            closeClass: 'icon-remove',
            closeText: '&times;'
        });

        // Закрыть окно через 5 сек.
        setTimeout(function() { $.modal.close(); }, 5000);

    });

// Ошибка при отправке AJAX-запроса
    mainForm.on('serverError.sml', function(e, instance, form, response) {

        $('#modal-error-ajax').modal({
            fadeDuration: 350,
            closeClass: 'icon-remove',
            closeText: '&times;'
        });
        setTimeout(function() { $.modal.close(); }, 5000);

    });

// Ошибка на сервере при отправке формы
    mainForm.on('ajaxError.sml', function(e, instance, form, response) {

        $('#modal-error-server').modal({
            fadeDuration: 350,
            closeClass: 'icon-remove',
            closeText: '&times;'
        });
        setTimeout(function() { $.modal.close(); }, 5000);

    });

// Инициализация...
    mainForm.sendMail();

    let formModal = $('form.form-modal');

// Успешная отправка формы
    formModal.on('success.sml', function() {

        $('.wrapper-form-modal').hide();
        $('.modal .title').html('Thank you for your message, support will answer you in a few minutes').addClass('success-color');

    });

// Ошибка при отправке AJAX-запроса
    formModal.on('serverError.sml', function(e, instance, form, response) {

        $('.wrapper-form-modal').hide();
        $('.modal .title').html('Error sending AJAX request!').addClass('error-color');

    });

// Ошибка на сервере при отправке формы
    formModal.on('ajaxError.sml', function(e, instance, form, response) {

        $('.wrapper-form-modal').hide();
        $('.modal .title').html('Error on the server when submitting the form!').addClass('error-color');

    });

// Инициализация...
    formModal.sendMail();

});
