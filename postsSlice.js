import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  byId: {},
  allIds: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,

  reducers: {
    addPost: {
      reducer(state, action) {
        const post = action.payload;

        state.byId[post.id] = post;
        state.allIds.push(post.id);
      },

      prepare(content, platforms) {
        return {
          payload: {
            id: nanoid(),
            content,
            platforms,
            draft: false,
          },
        };
      },
    },

    deletePost(state, action) {
      delete state.byId[action.payload];

      state.allIds = state.allIds.filter(
        (id) => id !== action.payload
      );
    },

    toggleDraft(state, action) {
      state.byId[action.payload].draft =
        !state.byId[action.payload].draft;
    },
  },
});

export const {
  addPost,
  deletePost,
  toggleDraft,
} = postsSlice.actions;

export default postsSlice.reducer;