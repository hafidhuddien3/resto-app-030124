const assert = require("assert");

Feature("Liking & Unliking Restaurants");

Before(({ I }) => {
  I.amOnPage("/#/like");
});

Scenario("showing empty liked restaurants", ({ I }) => {
  I.dontSee(".restaurantItem");
});

Scenario("liking one restaurant", async ({ I }) => {
  I.dontSee(".restaurant_item");

  I.amOnPage("/");

  // pause();

  I.seeElement(".restaurant_title");
  const firstRestaurant = locate(".restaurant_title").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/like");
  I.seeElement(".restaurant_item");
  const likedRestaurantTitle = await I.grabTextFrom(".restaurant_title");

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario("unliking one restaurant", async ({ I }) => {
  I.dontSee(".restaurant_item");

  //add restaurant
  I.amOnPage("/");
  I.seeElement(".restaurant_title");
  const firstRestaurant = locate(".restaurant_title").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.seeElement("#likeButton");
  I.click("#likeButton");

  //see element in favotite tab /#/like
  I.amOnPage("/#/like");
  I.seeElement(".restaurant_item");
  const likedRestaurantTitle = await I.grabTextFrom(".restaurant_title");
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  //click to go to detail page and unlike
  I.click(".restaurant_item");
  I.click("#likeButton"); //unlike

  //see element in favotite tab /#/like
  I.amOnPage("/#/like");
  I.dontSee(".restaurant_item");
});
