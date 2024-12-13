import { createSlice } from "@reduxjs/toolkit";
import { getStore, setStore } from "../../store";

const initialState = {
  data: getStore("shop") || [],
  like: getStore("like") || [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    getData(state, { payload }) {
      const findData = state.data.find((value) => value.id === payload.id);
      if (findData) {
        state.data = state.data.map((value) => {
          if (value.id === payload.id) {
            return {
              ...value,
              counter: (value.counter += 1),
              userPrice: value.price * value.counter,
            };
          }
          return value;
        });
        return;
      }
      state.data = [
        ...state.data,
        { ...payload, counter: 1, userPrice: payload.price },
      ];
      setStore("shop", state.data);
    },
    deleteData(state, { payload }) {
      state.data = state.data.filter((value) => value.id !== payload);
      setStore("shop", state.data);
    },
    increment(state, { payload }) {
      state.data = state.data.map((value) => {
        if (value.id === payload) {
          return {
            ...value,
            counter: (value.counter += 1),
            userPrice: value.price * value.counter,
          };
        }
        return value;
      });
      setStore("shop", state.data);
    },
    decrement(state, { payload }) {
      state.data = state.data.map((value) => {
        if (value.id === payload) {
          return {
            ...value,
            counter: (value.counter -= 1),
            userPrice: value.counter * value.price,
          };
        }
        return value;
      });
      if (state.data.find((value) => value.counter === 0)) {
        state.data = state.data.filter((value) => value.id !== payload);
      }
      setStore("shop", state.data);
    },
    addLikeData(state, { payload }) {
      state.like = [...state.like, payload];
      setStore("like", state.like);
    },
    deleteLikeData(state, { payload }) {
      state.like = state.like.filter((value) => value.id !== payload);
      setStore("like", state.like);
    },
  },
});

export const {
  getData,
  deleteData,
  increment,
  decrement,
  addLikeData,
  deleteLikeData,
} = shopSlice.actions;
export default shopSlice.reducer;
