
let widthInnerBox = $('.inside-box').outerWidth();
console.log(widthInnerBox);
$('#navbar').animate({ left: `-${widthInnerBox}px` }, 1000);

$('.icon-nav').click(function () {
    if ($('#navbar').css('left') === '0px') { 
        $('#closeMenu').css('display', 'none')
        $('#togellMenu').css('display', 'block')
        $('#navbar').animate({ left: `-${widthInnerBox}` }, 1000)
        $('.nav-link ul .home').animate({ top: ` 50% `, opacity: 0 }, 200, function () {
            $('.nav-link ul .search').animate({ top: ` 50% `, opacity: 0 }, 200, function () {
                $('.nav-link ul .categories').animate({ top: ` 50% `, opacity: 0 }, 200, function () {
                    $('.nav-link ul .area').animate({ top: ` 50% `, opacity: 0 }, 200, function () {
                        $('.nav-link ul .ingredients').animate({ top: ` 50% `, opacity: 0 }, 200, function () {
                            $('.nav-link ul .countact').animate({ top: ` 50% `, opacity: 0 }, 200, function () {
    
                            })
                        })
                    })
                })
            })
        })
       
       
    } else {
        $('#navbar').animate({ left: '0px' }, 1000);
        $('#closeMenu').css('display', 'block');
        $('#togellMenu').css('display', 'none');
        $('.nav-link ul .home').animate({ top: `0`, opacity: 1 }, 200, function () {
            $('.nav-link ul .search').animate({ top: `0`, opacity: 1 }, 200, function () {
                $('.nav-link ul .categories').animate({ top: `0`, opacity: 1 }, 200, function () {
                    $('.nav-link ul .area').animate({ top: `0`, opacity: 1 }, 200, function () {
                        $('.nav-link ul .ingredients').animate({ top: `0`, opacity: 1 }, 200, function () {
                            $('.nav-link ul .countact').animate({ top: `0`, opacity: 1 }, 200, function () {
    
                            })
                        })
                    })
                })
            })
        })
    }
})









$(document).ready(function(e){
    $('.landing').fadeOut(1000);
   
    $('body').css('overflow','auto')

})

let regxOfName = /^[a-z]{8}$/;
let nameInp = document.querySelector('.name');
let phoneInput = document.querySelector('.phone');
let passInput = document.querySelector('.password');
let emailInput = document.querySelector('.email');
let prepassInput = document.querySelector('.prepassword');

let submitBtn= document.querySelector('.submit');

// console.log(regxOfName.test('qwertyuiqqaa'));

// function vailsName(){
//     let valueName= nameInp.value  ;
//     console.log(valueName);

//     if(regxOfName.test(valueName) == true){
//       return true
//     }else{
//         return false
//     }
// }


// function validName(){
      
//     let valueName= nameInp.value  ;
//     if(regxOfName.test(valueName) == true){
//        return true
//     // console.log('true');
        
//     }else{
//         return false
//         // console.log('false');
//     }
// }
// nameInp.addEventListener('keyup',validName);


function validPhone(){
    let regxPhone=/^(010|011|015)[0-9]{8}$/
    let valuephone= phoneInput.value  ;
    if(regxPhone.test(valuephone) == true){
       return true
    // console.log('true');
    }else{
        return false
        // console.log('false');
    }
}
phoneInput.addEventListener('keyup',validPhone)

function validEmail(){
    let regxEmail=/^[a-z]{1,6}(@gmail.com)$/
    let valueEmail= emailInput.value  ;
    if(regxEmail.test(valueEmail) == true){
   
    // submitBtn.disabled = false
    return true
    }else{
      
        // submitBtn.disabled = true
        return false
    }
}
emailInput.addEventListener('keyup',validEmail)

function validPassword(){
    let regxPassword=/^[0-9]{6}$/
    let valuePass= passInput.value  ;
    
    if(regxPassword.test(valuePass) == true){
   
    // submitBtn.disabled = false
    return true
    }else{
       
        // submitBtn.disabled = true;
        return false
    }
}
passInput.addEventListener('input',validPassword)

if(validPassword()== true && validEmail() == true && validPhone() == true){
    $('.submit').removeAttr('disabled')
}


passInput.addEventListener('input',function(){
    if(validPassword()== true && validEmail() == true && validPhone() == true){
        // submitBtn.disabled = 'false'
        $('.submit').removeAttr('disabled')
    }else{

        $('.submit').attr('disabled','true')
        // submitBtn.disabled = 'true';
    }
})
emailInput.addEventListener('input',function(){
    if(validPassword()== true && validEmail() == true && validPhone() == true){
        // submitBtn.disabled = 'false'
        $('.submit').removeAttr('disabled')
    }else{
        $('.submit').attr('disabled','true')
        // submitBtn.disabled = 'true';
    }
})
phoneInput.addEventListener('input',function(){
    if(validPassword()== true && validEmail() == true && validPhone() == true){
        // submitBtn.disabled = 'false'
        $('.submit').removeAttr('disabled')
    }else{
        $('.submit').attr('disabled','true')
        // submitBtn.disabled = 'true';
    }
})