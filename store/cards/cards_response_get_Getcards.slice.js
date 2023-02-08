import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const cards_get_card_read = createAsyncThunk(
  "cards_response_get_Getcards/cards_get_card_read",
  async payload => {
    const response = await apiService.cards_get_card_read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const cards_response_get_GetcardsSlice = createSlice({
  name: "cards_response_get_Getcards",
  initialState,
  reducers: {},
  extraReducers: {
    [cards_get_card_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [cards_get_card_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [cards_get_card_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default { cards_get_card_read, slice: cards_response_get_GetcardsSlice }
