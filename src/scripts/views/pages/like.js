import FavoriteRestaurantsIdb from '../../data/favorite-restaurants-idb'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Like = {
  async render () {
    return `
    <h1>Liked Restaurant</h1>
    <br />

    <!-- resto -->
    <div class="" id="restoRow"></div>
    `
  },

  async afterRender () {
    const restaurants = await FavoriteRestaurantsIdb.getAllRestaurants()
    const restaurantsContainer = document.querySelector('#restoRow')

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
        createRestaurantItemTemplate(restaurant)
    })
  }
}

export default Like
