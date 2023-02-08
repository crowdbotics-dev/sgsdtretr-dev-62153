import axios from "axios"
const cards = axios.create({
  baseURL: "http://ebizel.com/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function cards_get_card_read(payload) {
  return cards.get(`/card`)
}
export const apiService = { cards_get_card_read }
