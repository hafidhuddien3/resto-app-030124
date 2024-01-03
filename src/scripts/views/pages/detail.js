import UrlParser from '../../routes/url-parser'
import { createRestaurantDetailTemplate } from '../templates/template-creator'
import LikeButtonInitiator from '../../utils/like-button-initiator'
import Restaurants from '../../data/restaurantdb-source'

const Detail = {
  async render () {
    return `
      <div id="detailRestaurant" class=""></div>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await Restaurants.getDetail(url.id)

    const restaurantContainer = document.querySelector('#detailRestaurant')

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant)

    function makeList (array) {
      const list = document.getElementById('ul')
      for (let i = 0; i < array.length; ++i) {
        const li = document.createElement('li')
        const obj = array[i]
        li.innerHTML =
          'Customer ' +
          obj.name +
          ', <br>"' +
          obj.review +
          '" <br>date ' +
          obj.date +
          '<br><br>'
        list.appendChild(li)
      }
    }

    makeList(restaurant.customerReviews)

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant
    })
  }
}

export default Detail
