import ApiEndpoint from '../globals/api-endpoint'

const Restaurants = {
  async getList () {
    return await fetch(ApiEndpoint.GET_LIST_OF_RESTAURANT, {
      method: 'GET'
    })
  },

  async getDetail (id) {
    const response = await fetch(ApiEndpoint.GET_DETAIL_OF_RESTAURANT(id), {
      method: 'GET'
    })
    const responseJson = await response.json()
    return responseJson.restaurant
  },

  async getSearch (query) {
    const response = await fetch(ApiEndpoint.SEARCH_RESTAURANT(query), {
      method: 'GET'
    })
    const responseJson = await response.json()
    return responseJson.restaurant
  },

  async postAddReview ({ id, name, review }) {
    const response = await fetch(ApiEndpoint.ADD_REVIEW, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, name, review })
    })
    const responseJson = await response.json()
    return responseJson.restaurant
  }
}

export default Restaurants
