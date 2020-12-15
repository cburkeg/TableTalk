import { dispatch, getState } from '../store'
import { setWaiting, clearWaiting } from '../actions/waiting'
import { showError } from '../actions/error'
import { getGardenById } from '../api/gardens'

export function getGarden (setGarden) {
  const storeState = getState()
  const { gardenId } = storeState.user
  dispatch(setWaiting())
  return getGardenById(gardenId)
    .then((garden) => {
      dispatch(clearWaiting())
      const { name, description, url, address, events, lat, lon } = garden
      setGarden({
        name,
        description,
        address,
        url,
        events,
        lat,
        lon
      })
      return null
    })
    .catch((error) => {
      dispatch(showError(error.message))
    })
}
