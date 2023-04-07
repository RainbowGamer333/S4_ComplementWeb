$('#buttonConnexion').click(function() {
    event.preventDefault();

    var login = $('#login').val();
    var password = $('#password').val();

    $.post('http://localhost:8080/td5/exercice1.html', {
        login: login,
        password: password
    });
});








