

var form = document.getElementById('form')

form.addEventListener('submit', function(event){
    event.preventDefault();


    var email = document.getElementById('email').value

    if (email) {

        alert(`Thank you for subscribing  !`);

        document.getElementById('email').value = ''; 
    } else {
        alert('Please enter a valid email address.');
    }
})