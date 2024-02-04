import Config from './config'

const ApiEndpoint = {
  GET_LIST_OF_RESTAURANT: `${Config.BASE_URL}/list`,
  GET_DETAIL_OF_RESTAURANT: (id) => `${Config.BASE_URL}/detail/${id}`,
  SEARCH_RESTAURANT: (query) => `${Config.BASE_URL}/search?q=${query}`,
  ADD_REVIEW: `${Config.BASE_URL}/review?api_key=${Config.KEY}`,

  SMALL_IMAGE: (pictureId) => `${Config.BASE_URL}/images/small/${pictureId}`,
  MEDIUM_IMAGE: (pictureId) => `${Config.BASE_URL}/images/medium/${pictureId}`,
  LARGE_IMAGE: (pictureId) => `${Config.BASE_URL}/images/large/${pictureId}`
}

export default ApiEndpoint
