import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=9c9b74f6f33403fdd62dab13673c0c90';

const initialState = {
  finance: [],
  financeDetail: [],
  isLoading: false,
};

export const getFinance = createAsyncThunk('finance/getFinance', async (_, thunkAPI) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getFinanceDetails = createAsyncThunk('details/getFinanceDetails', async (id, thunkAPI) => {
  try {
    const response = await fetch(`https://financialmodelingprep.com/api/v3/profile/${id}?apikey=9c9b74f6f33403fdd62dab13673c0c90`);
    return await response.json();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const FinanceSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFinance.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getFinance.fulfilled, (state, action) => ({
        ...state,
        finance: action.payload,
        isLoading: false,
      }))
      .addCase(getFinance.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
    builder
      .addCase(getFinanceDetails.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getFinanceDetails.fulfilled, (state, action) => ({
        ...state,
        financeDetail: action.payload.map((finance) => ({
          companyName: finance.companyName,
          symbol: finance.symbol,
          currency: finance.currency,
          exchange: finance.exchange,
          sector: finance.sector,
          country: finance.country,
          ceo: finance.ceo,
          industry: finance.industry,
          changes: finance.changes,
          price: finance.price,
        })),
        isLoading: false,
      }))
      .addCase(getFinanceDetails.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },

});

export default FinanceSlice.reducer;
