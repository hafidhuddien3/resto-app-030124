import ApiEndpoint from '../../globals/api-endpoint'

const createRestaurantItemTemplate = (data) => {
  return `
  <div class="card restaurant_item"><a href="/#/detail/${data.id}">
  <div class="top-left">Kota: ${data.city}</div>
<img class="lazyload" data-src="${ApiEndpoint.SMALL_IMAGE(data.pictureId)}" alt="${
    data.name
  } image" style="width:100%" crossorigin="anonymous">
<div class="container">
  <h4 class="restaurant_title">Restaurant ${data.name}</h4>
  Rating: ${data.rating}
</div>
</a>
</div>
  `
}

function getName (arrayObject) {
  const hasil = []
  arrayObject.forEach((element) => {
    hasil.push(` ${element.name}`)
  })
  return hasil.toString()
}

const createRestaurantDetailTemplate = (restaurant) => `

  <img class="item" src="${ApiEndpoint.SMALL_IMAGE(
    restaurant.pictureId
  )}" alt="${restaurant.name}" crossorigin="anonymous" />
  <br><br>
  <aside class="item">
  <h2>Information</h2><br>
  <h3>Restaurant Name</h3>
<p>${restaurant.name}</p><br>
  <h3>Description</h3>
<p>${restaurant.description}</p><br>
<h3>City and Address</h3>
<p>${restaurant.city + ' ' + restaurant.address}</p><br>
  <h3>Food Menu</h3>
  <p>${getName(restaurant.menus.foods)}</p><br>
  <h3>Drinks Menu</h3>
<p>${getName(restaurant.menus.drinks)}</p><br>
  
  <h3>Categories</h3>
<p>${getName(restaurant.categories)}</p><br>
<h3>Rating</h3>
  <p>${restaurant.rating}</p><br>
  <h3>Add to Favorite</h3>
  <div id="likeButtonContainer"></div><br>
  <h3>Customer Reviews</h3>
  <p id="ul"></p><br>
  </aside>
`

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate
}
