
//sending email from mailgun applications in 
$('form').on('submit', (e) => {
    e.preventDefault();

    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const subject = $('#subject').val().trim();
    const text = $('#text').val().trim();

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

//make active nav elements 

// function activeLinkControl() {
//     $('.navbar-nav .nav-item a').click(function () {
//         //remove active class from any of the nav-item 
//         $('.nav-link').removeClass('active')
//         //add active class to clicked item but at li not the anchor
//         $(this).closest('.nav-link').addClass('active')
//     });

// }
//calling functions
//activeLinkControl();