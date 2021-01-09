
//sending email from mailgun applications in 
$('form').on('submit', (e) => {
    e.preventDefault();

    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const subject = $('#subject').val().trim();
    const text = $('#text').val().trim();

    //form clintside input validation 
    //name field validation
    if (name == "") {
        $('#username').html('*please enter your name here');
        return false;
    }

    if ((name.length <= 2) || (name.length > 20)) {
        $('#username').html('* name charecter must be beetween 2 and 20');
        return false;
    }

    if (!isNaN(name)) {
        $('#username').html('* only characters are allowed');
        return false;
    }
    //email field validation
    if (email == "") {
        $('#emailAdress').html('*please fill the email address, We will not share your email address to anyone');
        return false;
    }

    if (email.indexOf('@') <= 0) {
        $('#emailAdress').html('*@ is in invalid position');
        return false;
    }

    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        $('#emailAdress').html('*. is in invalid position');
        return false;
    }

    //subject field validation
    if (subject == "") {
        $('#contactSubject').html('*please fill the subject field');
        return false;
    }

    if ((subject.length <= 2) || (subject.length > 30)) {
        $('#contactSubject').html('* subject charecter must be beetween 2 and 30');
        return false;
    }

    //message field validation
    if (text == "") {
        $('#message').html('*please fill the message field');
        return false;
    }

    if ((text.length <= 2) || (text.length > 200)) {
        $('#message').html('* text charecter must be beetween 2 and 200');
        return false;
    }

    alert('Email sent');

    $("form").trigger("reset");

    const data = {
        name,
        email,
        subject,
        text
    };

    $.post('/email', data, function () {
        console.log('Server recieved our data');
    });
});

// function validation() {

//     const user = document.getElementById('#name').value;
//     const messageBox = document.getElementById('#text').value;

//     if (name == "") {
//         document.getElementById('#username').innerHTML = '* please fill the username field';
//         return false;

//     }

//     if (messageBox == "") {
//         document.getElementById('#message').innerHTML = '* please fill the message field';
//         return false;

//     }

// }

//reset the form item after submit 

// function clearForm() {

//     const btnClear = document.querySelector('form button');
//     const inputs = document.querySelectorAll('input');
//     const textArea = document.querySelectorAll('textarea');

//     btnClear.addEventListener('click', () => {

//         textArea.forEach(input => input.value = '');
//         inputs.forEach(input => input.value = '');

//     });

// }

//  $('form')[0].reset();

//async function funTwo() {
    // $("form").trigger("reset");
//}

