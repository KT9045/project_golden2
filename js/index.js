// document.getElementById("book_place_right_now").addEventListener("click", () => document.getElementById("form").style.display = "block")

// const form = document.getElementById("form")

// form.addEventListener("submit", (ev) => {
//     ev.preventDefault()
//     localStorage.setItem('username', form.elements["username"].value);
// })


jQuery(document).ready(function() {
    console.log('ready')

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {

            let listUsers = '';

            for (let i = 0; i < users.length; i++) {
                const element = users[i];
                listUsers += `
                <div class="user-item">
                    <h2>${element.name} ${element.username}</h2>
                    <p>City: ${element.address.city}<p/>
                    <a href="${element.email}">${element.email}</a>
                </div>`

            }

            $("#users .user-list").append(listUsers);
            console.log(users);
        });

        $('.open-menu').click(function(){
            $('body').toggleClass('menu-opened');
            return false;
        });//btn-open-manu

$('#phone').mask("(999)-999-9999")

});
jQuery(window).load(function() {
   console.log('load')

})

