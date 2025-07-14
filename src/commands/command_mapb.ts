
import { State } from "src/state";

export async function commandMapb(state: State): Promise<void> {
  const api = state.api
  let currentUrl = state.prevLocation
  if (!currentUrl) {
    console.log("you're on the first page")
    return
  }
  try {
    const locationObject = currentUrl ? await api.fetchLocations(currentUrl) : await api.fetchLocations()
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
