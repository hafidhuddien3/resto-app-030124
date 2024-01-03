import Restaurants from '../../data/restaurantdb-source'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Home = {
  async render () {
    return `
      <div class="hero">

      <picture>
      <source media="(max-width: 600px)" srcset="./images/heros/hero-image_2-small.jpg">
      <source srcset="./images/heros/hero-image_2-large.jpg">
      <img src='./images/heros/hero-image_2.jpg' 
           alt="hero image">
    </picture>

      <div class="hero__inner"></div>
    </div>
    
    <br /><br />
    <h1>Explore Restaurant</h1>
    <br />

    <!-- resto -->
    <div class="" id="restoRow"></div>
    `
  },

  async afterRender () {
    await this._initialData()
    this._initialListener()
  },

  _initialListener () {},

  async _initialData () {
    try {
      const fetchRestaurants = await Restaurants.getList()
      const responseRestaurants = await fetchRestaurants.json()
      this._restaurants = responseRestaurants.restaurants
      this._populateRestaurantsToGrid(this._restaurants)
    } catch (error) {
      console.error(error)
    }
  },

  _populateRestaurantsToGrid (restaurantList = null) {
    if (!(typeof restaurantList === 'object')) {
      throw new Error(
        `Parameter List should be an object. The value is ${restaurantList}`
      )
    }
    if (!Array.isArray(restaurantList)) {
      throw new Error(
        `Parameter List should be an array. The value is ${restaurantList}`
      )
    }
    const restaurantRow = document.querySelector('#restoRow')
    restaurantList.forEach((item, index) => {
      restaurantRow.innerHTML += createRestaurantItemTemplate(
        restaurantList[index]
      )
    })
  }
}

export default Home
