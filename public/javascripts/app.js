var subsUrl = {
  names: "http://apify.heroku.com/api/subway_subs.json?callback=?",
  breads: "http://apify.heroku.com/api/subway_breads.json?callback=?",
  cheeses: "http://apify.heroku.com/api/subway_cheeses.json?callback=?",
  ingredients: "http://apify.heroku.com/api/subway_ingredients.json?callback=?",
  sauces: "http://apify.heroku.com/api/subway_sauces.json?callback=?"
};
// var subs = {
//   names: [],
//   breads: [],
//   cheeses: [],
//   ingredients: [],
//   sauces: []
// };
var subs = {
  names: [{ name: "Chicken Strips", image: "/assets/FoodMenu/small/subs/ChickenStrip.png"}, { name: "Chicken Teriyaki", image: "/assets/FoodMenu/small/subs/ChTeri.png"}, { name: "Ham", image: "/assets/FoodMenu/small/subs/Ham.png"}, { name: "Roast Beef", image: "/assets/FoodMenu/small/subs/RstBeef.png"}, { name: "Roasted Chicken", image: "/assets/FoodMenu/small/subs/RstCh.png"}, { name: "Subway Club Â®", image: "/assets/FoodMenu/small/subs/SubClub.png"}, { name: "Turkey", image: "/assets/FoodMenu/small/subs/Turkey.png"}, { name: "Turkey & Ham", image: "/assets/FoodMenu/small/subs/TurkeyHam.png"}, { name: "Veggie Delite Â®", image: "/assets/FoodMenu/small/subs/VegDel.png"}, { name: "Chicken & Bacon Ranch Melt", image: "/assets/FoodMenu/small/subs/ChBacRanch.png"}, { name: "Chicken Fillet", image: "/assets/FoodMenu/small/subs/ChFillet.png"}, { name: "Chicken Parmigiana Melt", image: "/assets/FoodMenu/small/subs/chParm.png"}, { name: "Chicken Schnitzel", image: "/assets/FoodMenu/small/subs/ChknSchnitzel.png"}, { name: "Italian B.M.T Â®", image: "/assets/FoodMenu/small/subs/ItlBMT.png"}, { name: "Meatball", image: "/assets/FoodMenu/small/subs/Meatball.png"}, { name: "Moroccan Lamb", image: "/assets/FoodMenu/small/subs/SubMoroccan.png"}, { name: "Pizza Sub with Cheese", image: "/assets/FoodMenu/small/subs/Pizza.png"}, { name: "Steak & Cheese", image: "/assets/FoodMenu/small/subs/StCheese.png"}, { name: "Subway Melt â¢", image: "/assets/FoodMenu/small/subs/SubMelt.png"}, { name: "Subway Seafood Sensation â¢", image: "/assets/FoodMenu/small/subs/SfSensation.png"}, { name: "Tuna", image: "/assets/FoodMenu/small/subs/Tuna.png"}, { name: "Veggie Patty", image: "/assets/FoodMenu/small/subs/VegPatty.png"}, { name: "Bacon, Egg & Cheese", image: "/assets/FoodMenu/small/subs/BaconEgg.png"}, { name: "Egg & Cheese", image: "/assets/FoodMenu/small/subs/cheeseEgg.png"}, { name: "Ham, Egg & Cheese", image: "/assets/FoodMenu/small/subs/HamEgg.png"}],
  breads: [{ name: "Honey Oat", image: "/assets/FoodMenu/small/breads/HoneyOat.png"}, { name: "Italian Herbs & Cheese", image: "/assets/FoodMenu/small/breads/ItalHerbsCheese.png"}, { name: "Wheat", image: "/assets/FoodMenu/small/breads/Wheat.png"}, { name: "Multigrain", image: "/assets/FoodMenu/small/breads/Multigrain.png"}, { name: "White", image: "/assets/FoodMenu/small/breads/White.png"}],
  cheeses: [{ name: "Cheddar", image: "/assets/FoodMenu/small/cheeses/cheddar.png"}, { name: "Old English", image: "/assets/FoodMenu/small/cheeses/OldEng.png"}, { name: "Swiss", image: "/assets/FoodMenu/small/cheeses/Swiss.png"}, { name: "Mozzarella", image: "/assets/FoodMenu/small/cheeses/Moz.png"}],
  ingredients: [{ name: "Capsicum", image: "/assets/FoodMenu/small/salads/capsicum.png"}, { name: "Carrot", image: "/assets/FoodMenu/small/salads/carrot.png"}, { name: "Cucumber", image: "/assets/FoodMenu/small/salads/cucumber.png"}, { name: "Jalapenos", image: "/assets/FoodMenu/small/salads/jalap.png"}, { name: "Lettuce", image: "/assets/FoodMenu/small/salads/Lettuce.png"}, { name: "Olives", image: "/assets/FoodMenu/small/salads/olives.png"}, { name: "Pickles", image: "/assets/FoodMenu/small/salads/Pickles.png"}, { name: "Tomato", image: "/assets/FoodMenu/small/salads/tomato.png"}, { name: "Avocado", image: "/assets/FoodMenu/small/salads/avo.png"}, { name: "Onion", image: "/assets/FoodMenu/small/salads/onion.png"}],
  sauces: [{ name: "BBQ", image: "/assets/FoodMenu/small/sauces/SauceBBQ.png"}, { name: "Chipotle", image: "/assets/FoodMenu/small/sauces/SauceChipo.png"}, { name: "Honey Mustard", image: "/assets/FoodMenu/small/sauces/SauceHonMus.png"}, { name: "Marinara", image: "/assets/FoodMenu/small/sauces/SauceMarinara.png"}, { name: "Mayo", image: "/assets/FoodMenu/small/sauces/SauceMayo.png"}, { name: "Ranch", image: "/assets/FoodMenu/small/sauces/SauceRanch.png"}, { name: "Sweet Chilli", image: "/assets/FoodMenu/small/sauces/SauceSwChilli.png"}, { name: "Sweet Onion", image: "/assets/FoodMenu/small/sauces/SauceSwOnion.png"}, { name: "Thousand Island", image: "/assets/FoodMenu/small/sauces/SauceThousIsl.png"}, { name: "Tomato", image: "/assets/FoodMenu/small/sauces/SauceTomato.png"}, { name: "Hot Chilli", image: "/assets/FoodMenu/small/sauces/Sauce_HotChilli.png"}, { name: "Mint Yoghurt", image: "/assets/FoodMenu/small/.../Sauce_MintYoghurti.png"}]
};
var randomSub = {};
var imageBaseUrl = "http://www.subway.com.au";
$(function(){
  //Set title
  var title1 = '$ sudo make me a sub';
  var title2 = 'Generate Random Sub of the Day';
  $('#generate-random-sub').text(getRandomNumber(100) % 3 == 0 ? title1 : title2);
  //Load subway data
  function initializeSubs(){
    $.getJSON(subsUrl.names, function(data){
      subs.names = JSON.parse(data);
    });
  }
  function initializeBreads(){
    $.getJSON(subsUrl.breads, function(data){
      subs.breads = JSON.parse(data);
    });
  }
  function initializeCheeses(){
    $.getJSON(subsUrl.cheeses, function(data){
      subs.cheeses = JSON.parse(data);
    });
  }
  function initializeIngredients(){
    $.getJSON(subsUrl.ingredients, function(data){
      subs.ingredients = JSON.parse(data);
    });
  }
  function initializeSauces(){
    $.getJSON(subsUrl.sauces, function(data){
      subs.sauces = JSON.parse(data);
    });
  };
  (function initializeData(){
    initializeSubs();
    initializeBreads();
    initializeCheeses();
    initializeIngredients();
    initializeSauces();
  })//();
  function getRandomNumber(maxValue){
    return Math.floor(Math.random() * maxValue)
  }
  function chooseRandom(array){
    return array[getRandomNumber(array.length)];
  }
  function chooseMultipleRandom(array, divisor){
    var chosen = [];
    for(var i=0; i<array.length; i++){
      var n = getRandomNumber(100);
      if(n % divisor == 0){
        chosen.push(array[i]);
      }
    }
    return chosen;
  }
  //Choose Random Sub
  function chooseRandomSub(){
    randomSub.name = chooseRandom(subs.names);
  }
  //Choose Random Bread
  function chooseRandomBread(){
    randomSub.bread = chooseRandom(subs.breads);
  }
  //Choose Random Cheese
  function chooseRandomCheese(){
    randomSub.cheese = chooseRandom(subs.cheeses);
  }
  //Choose multiple ingredients
  function chooseRandomIngredients(){
    randomSub.ingredients = chooseMultipleRandom(subs.ingredients, 2);
  }
  //Choose multiple sauce
  function chooseRandomSauces(){
    randomSub.sauces = chooseMultipleRandom(subs.sauces, 3);
  }
  // Fill sub, bread and cheese
  function fillRandomSub(){
    $('.random_sub img').attr('src', imageBaseUrl + randomSub.name.image);
    $('.random_sub .label').html(randomSub.name.name);
    $('.random_bread img').attr('src', imageBaseUrl + randomSub.bread.image);
    $('.random_bread .label').html(randomSub.bread.name);
    $('.random_cheese img').attr('src', imageBaseUrl + randomSub.cheese.image);
    $('.random_cheese .label').html(randomSub.cheese.name);
    fillRandomIngredients();
    fillRandomSauces();
  }
  // Fill multiple ingredients
  function fillRandomIngredients(){
    $('.ingredients_row').html('');
    for(var i=0; i< randomSub.ingredients.length; i++){
      var ingredient = randomSub.ingredients[i];
      var ingredientDiv = $('.random_ingredient_template').clone()
        .removeClass('random_ingredient_template')
        .addClass('random_ingredient')
        .addClass('span2')
        .show();
      ingredientDiv.find('img').attr('src', imageBaseUrl + ingredient.image);
      ingredientDiv.find('.label').html(ingredient.name);
      $('.ingredients_row').append(ingredientDiv);
    }
  }
  // Fill multiple sauces
  function fillRandomSauces(){
    $('.sauces_row').html('');
    for(var i=0; i< randomSub.sauces.length; i++){
      var sauce = randomSub.sauces[i];
      var sauceDiv = $('.random_sauce_template').clone()
        .removeClass('random_sauce_template')
        .addClass('random_sauce')
        .addClass('span2')
        .show();
      sauceDiv.find('img').attr('src', imageBaseUrl + sauce.image);
      sauceDiv.find('.label').html(sauce.name);
      $('.sauces_row').append(sauceDiv);
    }
  }

  function generateRandomSub(){
    chooseRandomSub();
    chooseRandomBread();
    chooseRandomCheese();
    chooseRandomIngredients();
    chooseRandomSauces();
    fillRandomSub();
  }
  generateRandomSub();
  $('#generate-random-sub').click(function(){
    generateRandomSub();
  });
});

function setDefaultImage(element){
  element.src = "http://placehold.it/120x120&text=No Image";
  element.onerror = "";
  return true;
}