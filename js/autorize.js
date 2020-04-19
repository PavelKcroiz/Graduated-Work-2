let wrapper1 = document.querySelector('.wrapper1');
let signup = document.querySelector(".sign_up");
let checkin = document.querySelector(".check_in");
let signUp = document.querySelector("#sign_up");
let checkIn = document.querySelector("#check_in");
let checkins = document.querySelector(".check_ins");
let passwords = document.querySelector(".passwords");
let names = document.querySelector(".names");
let name = document.querySelector(".name");
let password1 = document.querySelector(".password1");
let password2 = document.querySelector(".password2");
let Autorize = window.localStorage;
let door = document.querySelector("#door");
var check = 0;



door.addEventListener('click', function(){
    if(check == 0){

    signUp.style.display = "flex";
    wrapper1.style.display = "flex";

    sliders.style.display = "none";
    text.style.display = "none";
    advantages.style.display = "none";
    } else {
        alert('Вы вышли из учётной записи');
        door.innerHTML = 'Войти';
        check = 0;
    }
});

checkins.addEventListener('click', function(){
    signUp.style.display = "none";
    checkIn.style.display = "flex";

    sliders.style.display = "none";
    text.style.display = "none";
    advantages.style.display = "none";
});


checkin.addEventListener('click', function() {
    if (name.value !== '') {
        if(password1.value === password2.value && password1.value !== ''){
            Autorize.setItem(name.value, password1.value);
            alert('Вы зарегестрированы как ' + name.value);
            signUp.style.display = "flex";
            checkIn.style.display = "none";
        }else alert('Пароли должны совпадать!');
    } else alert('Введите логин!');
});

signup.addEventListener('click', function(){
    if(names.value != ''){
        let cool = 0;
        let login ='';
        for(let i = 0; i < Autorize.length; i++){
            if(names.value == Autorize.key(i) && Autorize.getItem(Autorize.key(i)) == passwords.value){
                login = Autorize.key(i);
                cool = 1;
            }
        }
        if(cool == 1) {
            alert('С возвращением ' + login);
            door.innerHTML = login;
            check = 1;

            signUp.style.display = "none";
            wrapper1.style.display = "none";

            sliders.style.display = "block";
            text.style.display = "blcok";
            advantages.style.display = "block";
        } else alert('Неверный логин или пароль!')
    } else alert('Введите логин!');
});
