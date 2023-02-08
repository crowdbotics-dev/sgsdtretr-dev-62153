import axios from "axios"
const dataModel = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.crowdbotics.com/dashboard/app/2844/studio",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
