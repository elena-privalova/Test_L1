import { combineReducers, configureStore } from '@reduxjs/toolkit';

import postsReducer from './posts/slicesPosts';
import cardReducer from './posts/slicesCard';
import commentsReducer from './comments/slicesComments';
import authModalsReducer from './modals/slicesAuthModals';
import authReducer from './auth/slicesAuth';
import userReducer from './user/slicesUser';
import newsReducer from './news/slicesNews';
import newsModalReducer from './modals/slicesNewsModal';
import refreshModalReducer from './modals/slicesRefreshModal';
import commentModalReducer from './modals/slicesCommentModal';

export const rootReducer = combineReducers({
  posts: postsReducer,
  card: cardReducer,
  comments: commentsReducer,
  authModals: authModalsReducer,
  auth: authReducer,
  user: userReducer,
  news: newsReducer,
  newsModal: newsModalReducer,
  refreshModal: refreshModalReducer,
  commentModal: commentModalReducer,
});

const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  devTools: true,
  reducer: rootReducer,
});

export default store;
