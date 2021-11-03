let email_input = document.querySelector('.email_input');
let password_input = document.querySelector('.password_input');
let warm_text = document.querySelectorAll('.warm');

let re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

email_input.addEventListener('change', () => {
    check(re.test(email_input.value) == false, 0, email_input);
});

password_input.addEventListener('change', () => {
    len = password_input.value.length + 1;
    check(len < 8, 1, password_input);
});

function check(condition, num, item) {
    if (condition) {
        warm_text[num].style.display = 'flex';
        item.classList.add('red');
    } else {
        warm_text[num].style.display = 'flex';
        item.remove.add('red');
    }
}