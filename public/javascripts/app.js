var subsUrl = {
  names: "http://apify.heroku.com/api/subway_subs.json?callback=?",
  breads: "http://apify.heroku.com/api/subway_breads.json?callback=?",
  cheeses: "http://apify.heroku.com/api/subway_cheeses.json?callback=?",
  ingredients: "http://apify.heroku.com/api/subway_ingredients.json?callback=?",
  sauces: "http://apify.heroku.com/api/subway_sauces.json?callback=?"
};
var subs = {
  names: [],
  breads: [],
  cheeses: [],
  ingredients: [],
  sauces: []
};
var randomSub = {};
var imageBaseUrl = "http://www.subway.com.au";

$(function(){
  //Set title
  var title1 = '$ sudo make me a sub';
  var title2 = 'Generate Random Sub of the Day';
  $('#generate-random-sub').text(getRandomNumber(100) % 3 == 0 ? title1 : title2);

  //Load subs data
  $.when($.getJSON(subsUrl.names), $.getJSON(subsUrl.breads), $.getJSON(subsUrl.cheeses), $.getJSON(subsUrl.ingredients), $.getJSON(subsUrl.sauces)).done(function(names, breads, cheeses, ingredients, sauces){
    subs.names = JSON.parse(names[0]);
    subs.breads = JSON.parse(breads[0]);
    subs.cheeses = JSON.parse(cheeses[0]);
    subs.ingredients = JSON.parse(ingredients[0]);
    subs.sauces = JSON.parse(sauces[0]);
    generateRandomSub();
  });

  // Random utils
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
    randomSub.bread = chooseRandom(subs.breads);
    randomSub.cheese = chooseRandom(subs.cheeses);
    randomSub.ingredients = chooseMultipleRandom(subs.ingredients, 2);
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
    fillRandomSub();
  }
  $('#generate-random-sub').click(function(){
    generateRandomSub();
  });
});

function setDefaultImage(element){
  element.src = "http://placehold.it/120x120&text=No Image";
  element.onerror = "";
  return true;
}