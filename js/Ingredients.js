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





let row = document.querySelector('.row');

async function getIngradiantsFromApi() {
    let apiResponse = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    );
    console.log("apiResponse");
    let finalResult = await apiResponse.json();
    console.log(finalResult);
    let mealsIngredient = finalResult.meals;
    let containermealsIngredient = "";
    for (let i = 0; i < mealsIngredient.length; i++) {
      // let ingradiantDesc = `${mealsIngredient[i].strDescription
      //   .split(" ")
      //   .slice(0, 20)
      //   .join(" ")}`;
    //  console.log('hh' +mealsIngredient[i].strIngredient );
      if (i <= 20) {
        containermealsIngredient += ` 
          <div class="col-md-4 text-dark inetger">
          <div class="card text-center">
              <i class="fa-solid fa-bowl-food fa-3x card-img-top  "></i>
              <div class='text-dark'>
                <h4 class=" pt-4">${
                  mealsIngredient[i].strIngredient
                }</h4>
                <span class=" pt-4  text-white ">${JSON.stringify(
                  mealsIngredient[i].strDescription
                )
                  .split(" ")
                  .slice(0, 15)
                  .join(" ")}</span>
              </div>
            </div>
      </div>`;
      } else {
        break;
      }
    }
    $('#ingredSection').html(containermealsIngredient)
    // $(row).html(containermealsIngredient);
    $('#ingredSection .card h4').click(async function(e){
     
      console.log(`rrrr ${ $(e.target).text()}`);

      let apiResponses = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${$(e.target).text()}`);
        //   console.log("apiResponses");
           let finalResults = await apiResponses.json();
           console.log(finalResults);
           let mealsDesc = finalResults.meals;
           let containerMealsDesc = "";
           for (let i = 0; i < mealsDesc.length; i++) {
             if (`${mealsDesc[i].strMeal.includes($(e.target).text()) === true}`) {
        //       // let tags = mealsDesc[i].strTags.split(",");
        //       // for (let j = 0; j < tags.length; j++) {
        //       //   console.log(tags[j]);
        //       // }
               containerMealsDesc += ` <div class="col-md-4 catContainer">
               <div class=" cardCat">
                   <img src="${mealsDesc[i].strMealThumb}" class="card-img-top" alt="...">
                   <div class="card-body categoryBody">
                     <p class="card-text categoryText p1 fw-bolder">${mealsDesc[i].strMeal}</p>
                   </div>
                 </div>
           </div>`;
             }
           }
      
           $("#ingredSection").html(containerMealsDesc);
      
        //   // return element;
        //   // console.log(element);
        //   // $("#lightBox").removeClass("d-none");
        //   // $("#mealsCategories").addClass("d-none");
        //   //description
      
           $(".card-body p").click(async function (e) {
        //     // document.location.href = "../description.html";
        //     // let element = $(e.target).text();
        //     console.log(`dxx ${$(e.target).text()}`);
             let response = await fetch(
               `https://www.themealdb.com/api/json/v1/1/search.php?s=${$(e.target).text()}`);
             console.log("response");
             let final = await response.json();
             console.log(final);
             let mealsCatDesc = final.meals;
             let containerMealsCatDesc = "";
             for (let i = 0; i < mealsCatDesc.length; i++) {
               if (
                 `${mealsCatDesc[i].strMeal.includes($(e.target).text()) === true}`
               ) {
        //         // let tags = mealsCatDesc[i].strTags.split(",");
        //         // for (let j = 0; j < tags.length; j++) {
        //         //   console.log(tags[j]);
        //         // }
                containerMealsCatDesc +=` <div class="col-md-5">
                <div class="img">
                    <img src="${mealsCatDesc[i].strMealThumb}" alt="meal" class="w-100">
                    <div class= 'text-center pt-3'><h4>${mealsCatDesc[i].strMeal}</h4></div>
                </div>
            </div>
            <div class="col-md-7 py-5">
                <div class="captionDescraption">
                    <h3>Instructions</h3>
                    <p class='lead'>${mealsCatDesc[i].strInstructions}</p>
                    <div><span class="fw-bolder pe-3 py-2">Area :</span>${mealsCatDesc[i].strArea}<span</div>
                    <div><span class="fw-bolder pe-3 py-2">Category  :</span>${mealsCatDesc[i].strCategory}<span</div>
                    
                    <div class='py-3'><h3>Recipes :</h3></div>
                    <div class="recipes d-flex justify-content-center align-items-center  flex-wrap">
                        <div class="r1 text-muted">${mealsCatDesc[i].strMeasure1} ${mealsCatDesc[i].strIngredient1}</div>
                        <div class="r1 text-muted">${mealsCatDesc[i].strMeasure2} ${mealsCatDesc[i].strIngredient2}</div>
                        <div class="r1 text-muted">${mealsCatDesc[i].strMeasure3} ${mealsCatDesc[i].strIngredient3}</div>
                        <div class="r1 text-muted">${mealsCatDesc[i].strMeasure4} ${mealsCatDesc[i].strIngredient4}</div>
                        <div class="r1 text-muted">${mealsCatDesc[i].strMeasure5} ${mealsCatDesc[i].strIngredient5}</div>
                        <div class="r1 text-muted">${mealsCatDesc[i].strMeasure6} ${mealsCatDesc[i].strIngredient6}</div>
                        <div class="r1 text-muted">${mealsCatDesc[i].strMeasure7} ${mealsCatDesc[i].strIngredient7}</div>
                        <div class="r1 text-muted">${mealsCatDesc[i].strMeasure8} ${mealsCatDesc[i].strIngredient8}</div>
                        <div class="r1 text-muted">${mealsCatDesc[i].strMeasure9} ${mealsCatDesc[i].strIngredient9}</div>
                        <div class="r1 text-muted">${mealsCatDesc[i].strMeasure10} ${mealsCatDesc[i].strIngredient10}</div>
                    </div>
        
        
                    <div class="links d-flex justify-content-start align-items-center pt-5">
                    <a class='youtub' href="${mealsCatDesc[i].strYoutube}">Youtube</a>
                    <a class ='Source'href="${mealsCatDesc[i].strSource}">Source</a>
                    </div>
        
                </div>
                
            </div>` ;
               }
             }
      
             $("#ingredSection").html(containerMealsCatDesc);

    })
    })
  }
    
    
  getIngradiantsFromApi();
  