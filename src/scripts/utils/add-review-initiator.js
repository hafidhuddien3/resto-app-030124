import Restaurants from '../data/restaurantdb-source'

const AddReviewInitiator = {
  async init ({ restoId, makeList }) {
    this._restaurantId = restoId
    this._makeList = makeList

    this._initialListener()
  },

  _initialListener () {
    const addReview = document.querySelector('#addReview')
    addReview.addEventListener(
      'submit',
      (event) => {
        event.preventDefault()
        event.stopPropagation()

        this._sendPost()
      },
      false
    )
  },

  async _sendPost () {
    const formData = this._getFormData()

    if (this._validateFormData({ ...formData })) {
      console.log('formData=')
      console.log(formData)

      try {
        const response = await Restaurants.postAddReview(formData)
        // window.alert('New Review added successfully');
        this._makeList(response)
      } catch (error) {
        alert(error)
      }
    }
  },

  _getFormData () {
    const nameInput = document.querySelector('#name')
    const reviewInput = document.querySelector('#review')

    return {
      id: this._restaurantId,
      name: nameInput.value,
      review: reviewInput.value
    }
  },

  _validateFormData (formStatus) {
    const formStatusFiltered = Object.values(formStatus).filter(
      (item) => item === ''
    )
    return formStatusFiltered.length === 0
  }

}

export default AddReviewInitiator
