import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    username: "Mehemmed Hajyeff",
    fullName: "Mehemmed Hajyeff",
    avatar:
      "https://media.licdn.com/dms/image/D4E03AQEz57mYXKnajQ/profile-displayphoto-shrink_400_400/0/1696092681299?e=1704326400&v=beta&t=1zpQbJypFc4jk2bb2FhJUGb179PE3VYviIzguvW74Ac",
  },
  accounts: [
    {
      id: 1,
      username: "Elon Musk",
      fullName: "Elon Musk",
      avatar:
        "https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg",
    },
    {
      id: 2,
      username: "Mehemmed Hajiyeff",
      fullName: "Mehemmed Hajiyeff",
      avatar:
        "https://media.licdn.com/dms/image/D4E03AQEz57mYXKnajQ/profile-displayphoto-shrink_400_400/0/1696092681299?e=1704326400&v=beta&t=1zpQbJypFc4jk2bb2FhJUGb179PE3VYviIzguvW74Ac",
    },
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // state manipule etme metodlari
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        this._setCurrentAccount(false);
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccount, _setCurrentAccount, _removeAccount } = auth.actions;
export default auth.reducer;
