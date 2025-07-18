import { State } from "src/state";

export async function commandMap(state: State): Promise<void> {
  const api = state.api
  let currentUrl = state.nextLocation
  try {
    const locationObject = currentUrl.length ? await api.fetchLocations(currentUrl) : await api.fetchLocations()
    state.nextLocation = locationObject.next
    if (locationObject.previous) state.prevLocation = locationObject.previous
    for (const location of locationObject.results) {
      console.log(location.name)
    }
  } catch (error) {
    console.warn(error)
    return
  }
  return
} 
