///////////////Menu Items (MVP)///////////////////

const latte = {name: "Cafe Latte", price: 4, category: "Drinks"};
const breakfastBurrito = {name: "Breakfast Burrito", price: 16, category:"Breakfast"};

/* Task 1a: write a function to return more menu items with the same format as the items above. */

function createMenuItem(name, cost, category){
    this.name = name;
    this.cost = cost;
    this.category = category;
}

/* Task 1b: use your function to create 3 more menu items. You may add any items to the menu that you'd like */

const salad = new createMenuItem("Caesar Salad", 11.5, "Appetizer");
const steak = new createMenuItem("14 Oz Ribeye", 24, "Dinner");
const fish = new createMenuItem("Ahi Ahi with Lemon Aoli", 19, "Special");

/* Task 2: You're having a lunch special! 25% off for teachers and students, 10% off for everyone else. Add a method to your burger object that automatically calculates price given a string as a parameter. */

const burger = {name: "Burger", price: 18, category: "Lunch", discount: function(guest){
  if (guest === "public"){
    return this.price*.9
  } else if (guest === "student" || guest === "teacher"){
    return this.price * .75
  } else {
    return this.price
  };
}};

///////////////Reviews (MVP)///////////////////

const reviews = [{name: "Daniela", rating: 5, feedback:"Beautiful atmosphere and wonderful vegan options!"},
    {name: "Jack", rating: 3, feedback:"A little too hipster for my taste, but the burger was decent, if overpriced"},
    {name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." },
    {name:"Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."},
    {name:"Reyna", rating: 3.5, feedback: ""},
]

/* Task 4: Console.log just Julius' feedback */
console.log(reviews[5].feedback);

/* Task 5: Add a new rating with your (fictitious) opinions of the restaurant in the same format as the reviews above. */
reviews.push({name: "Alexander", rating: .5, feedback: "I've never been so disgruntled by a dining experience. The waitstaff was rude, the appetizers were cold, and there was a  fly in my soup!"})

/* Task 6: Add the following feedback to Reyna's rating - "this place is chill with really cool people, great for getting work done on weekdays"*/
reviews[reviews.length-2].feedback = "this place is chill with really cool people, great for getting work done on weekdays";

/*  Task 7: Write a function to return a review based on the index of the review in the array.*/
function getReviewByIndex(array, index) {
  return `${array[index].name} gave the restaurant a ${array[index].rating} star review and their feedback was: "${array[index].feedback}".`
}
  
/* Task 8: Write a function to get information about the most recent review called `getLastReview`*/
function getLastReview(array) {
  return `${array[array.length-1].name} gave the restaurant a ${array[array.length-1].rating} star review and their feedback was: "${array[array.length-1].feedback}".`  
} 


///////////////🍔☕️🍽 STRETCH🍔☕️🍽////////////////////

/** STRETCH 1: Write a function called `getReviewByRating` that returns an array containing all reviews in a certain range. Your function should accept: */

 function getReviewByRating(array, rating) {
    const byRating = array.filter(review => review.rating == rating);
    return byRating
       };
  
/** STRETCH 2: Write a function called 'getLongestReview' that returns an array containing all reviews longer than 15 words. 
  
Your function should accept: 

  (1) An array of objects

and should return an array of objects. 

  For example, invoking getLongReviews(reviews) would return [
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." }]
*/
  function getLongReviews(array) {
    const longest = array.filter(review => review.feedback.split(" ").length > 15)
    return longest
  }
  

/* STRETCH 3:  This challenge is not related to the data above! 

Write a function called carMarker 

Your function should accept:

(1) a single odometer argument (a number) 

and return an object.

The returned object should have the following characteristics:
     it has an `odometer` property that contains the argument passed in.
     it has a `drive` method that takes a distance as its argument, and
         (1) causes the odometer in the object to be increased by the distance,
         (2) returns the updated value of the `odometer`.
*/


function carMaker(mileage) {
    const newCar = {odometer: mileage, drive: function(moreMileage){
      this.odometer += moreMileage;
      return `Your car now has ${this.odometer} miles on it`;
    }}
    return newCar;
}
