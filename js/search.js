$(document).ready(function(e){
    $('.landing').fadeOut(1000);
   
    $('body').css('overflow','auto')

})

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











let inputSearchByLetter=document.getElementById('searchByLetter');
let inputSearchByName=document.getElementById('searchByName');
let row = document.querySelector('.row')





async function getMealbYName(nameMeal){
    let apiMeal = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nameMeal}`);
    let response = await apiMeal.json();
    let finalRespos= response.meals
 
    let cartona ='';

    if(nameMeal == ''){
        $('.row').html('');
    }else{
        for (let i = 0; i < finalRespos.length; i++) {

            cartona+=`<div class="col-md-4 ">
            <div class="item position-relative">
            
                 <img src="${finalRespos[i].strMealThumb}" alt="" class="w-100 " >
            <div class="imgCaption bg-dark bg-opacity-50 position-absolute w-100 h-100 start-0 text-center d-flex align-items-center justify-content-center">
                <h5 class="headItem">${finalRespos[i].strMeal}</h5>
            </div>
            </div>
            
        </div>`
    
        }
        
    
        row.innerHTML=cartona;

        
        $('.col-md-4 h5').click(async function (e) {

            let nameOfMealSelected = $(e.target).text();//par
            console.log(nameOfMealSelected);
    
    
            let api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nameOfMealSelected}`);
            let apiResult = await api.json();
            let finalresult = apiResult.meals;
            console.log(finalresult);
            let cartona = '';
            for (let i = 0; i < finalresult.length; i++) {
                console.log(finalresult[i]);
                $('.descraptionSection').css('display', 'block')
                $('.mealOfRearch ').css('display', 'none')
    
                cartona += `  <div class="col-md-5">
                <div class="img">
                    <img src="${finalresult[i].strMealThumb}" alt="meal" class="w-100">
                    <div class= 'text-center pt-3'><h4>${finalresult[i].strMeal}</h4></div>
                </div>
            </div>
            <div class="col-md-7 py-5">
                <div class="captionDescraption">
                    <h3>Instructions</h3>
                    <p class='lead'>${finalresult[i].strInstructions}</p>
                    <div><span class="fw-bolder pe-3 py-2">Area :</span>${finalresult[i].strArea}<span</div>
                    <div><span class="fw-bolder pe-3 py-2">Category  :</span>${finalresult[i].strCategory}<span</div>
                    
                    <div class='py-3'><h3>Recipes :</h3></div>
                    <div class="recipes d-flex justify-content-center align-items-center  flex-wrap">
                        <div class="r1 text-muted">${finalresult[i].strMeasure1} ${finalresult[i].strIngredient1}</div>
                        <div class="r1 text-muted">${finalresult[i].strMeasure2} ${finalresult[i].strIngredient2}</div>
                        <div class="r1 text-muted">${finalresult[i].strMeasure3} ${finalresult[i].strIngredient3}</div>
                        <div class="r1 text-muted">${finalresult[i].strMeasure4} ${finalresult[i].strIngredient4}</div>
                        <div class="r1 text-muted">${finalresult[i].strMeasure5} ${finalresult[i].strIngredient5}</div>
                        <div class="r1 text-muted">${finalresult[i].strMeasure6} ${finalresult[i].strIngredient6}</div>
                    </div>
    
    
                    <div class="links d-flex justify-content-start align-items-center pt-5">
                    <a class='youtub' href="${finalresult[i].strYoutube}">Youtube</a>
                    <a class ='Source'href="${finalresult[i].strSource}">Source</a>
                    </div>
    
                </div>
                
            </div>`
    
                // console.log(finalresult[i].strYoutube)
                // console.log(finalresult[i].strSource)
            }
            $('.row').html(cartona)
    
    
    
    
        }
    
    
        )
    }

   
}


 inputSearchByName.addEventListener('input',function(){

      //regular expresion

    //   let regesNameInput= /[a-z]{5}/ig;
    // let valueInput = inputSearchByName.value;
    // console.log(valueInput);

    // if(valueInput == ''){
    //     $('.alertName').css('display','block')
    // }
    // else{
    //     if(regesNameInput.test(valueInput) == false ){
    //         $('.alertName').css('display','block')
            
    //       }else{
    //         $('.alertName').css('display','none')
    //       }
    
    // }
    
    let mealSelecte = getMealbYName(this.value);

    })

async function getMealbYFristLetter(firstLetter){
    let apiMeal = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`);
    let response = await apiMeal.json();
    let finalRespos= response.meals
  
    let cartona ='';

    for (let i = 0; i < finalRespos.length; i++) {

        cartona+=`<div class="col-md-4 ">
        <div class="item position-relative">
        
             <img src="${finalRespos[i].strMealThumb}" alt="" class="w-100 " >
        <div class="imgCaption bg-dark bg-opacity-50 position-absolute w-100 h-100 start-0 text-center d-flex align-items-center justify-content-center">
            <h5 class="headItem">${finalRespos[i].strMeal}</h5>
        </div>
        </div>
        
    </div>`


    }
    row.innerHTML=cartona;
    $('.col-md-4 h5').click(async function (e) {

        let nameOfMealSelected = $(e.target).text();//par
        console.log(nameOfMealSelected);


        let api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nameOfMealSelected}`);
        let apiResult = await api.json();
        let finalresult = apiResult.meals;
        console.log(finalresult);
        let cartona = '';
        for (let i = 0; i < finalresult.length; i++) {
            console.log(finalresult[i]);
            $('.descraptionSection').css('display', 'block')
            $('.mealOfRearch ').css('display', 'none')

            cartona += `  <div class="col-md-5">
            <div class="img">
                <img src="${finalresult[i].strMealThumb}" alt="meal" class="w-100">
                <div class= 'text-center pt-3'><h4>${finalresult[i].strMeal}</h4></div>
            </div>
        </div>
        <div class="col-md-7 py-5">
            <div class="captionDescraption">
                <h3>Instructions</h3>
                <p class='lead'>${finalresult[i].strInstructions}</p>
                <div><span class="fw-bolder pe-3 py-2">Area :</span>${finalresult[i].strArea}<span</div>
                <div><span class="fw-bolder pe-3 py-2">Category  :</span>${finalresult[i].strCategory}<span</div>
                
                <div class='py-3'><h3>Recipes :</h3></div>
                <div class="recipes d-flex justify-content-center align-items-center  flex-wrap">
                    <div class="r1 text-muted">${finalresult[i].strMeasure1} ${finalresult[i].strIngredient1}</div>
                    <div class="r1 text-muted">${finalresult[i].strMeasure2} ${finalresult[i].strIngredient2}</div>
                    <div class="r1 text-muted">${finalresult[i].strMeasure3} ${finalresult[i].strIngredient3}</div>
                    <div class="r1 text-muted">${finalresult[i].strMeasure4} ${finalresult[i].strIngredient4}</div>
                    <div class="r1 text-muted">${finalresult[i].strMeasure5} ${finalresult[i].strIngredient5}</div>
                    <div class="r1 text-muted">${finalresult[i].strMeasure6} ${finalresult[i].strIngredient6}</div>
                </div>


                <div class="links d-flex justify-content-start align-items-center pt-5">
                <a class='youtub' href="${finalresult[i].strYoutube}">Youtube</a>
                <a class ='Source'href="${finalresult[i].strSource}">Source</a>
                </div>

            </div>
            
        </div>`

            // console.log(finalresult[i].strYoutube)
            // console.log(finalresult[i].strSource)
        }
        $('.row').html(cartona)




    }


    )

}

inputSearchByLetter.addEventListener('input',function(){
    //  let regesletterInput= /^[a-z]${1}/;
    // let valueInput =inputSearchByLetter .value;
    // console.log(regesletterInput.test(valueInput));

    
     getMealbYFristLetter(this.value);

})
 



