import React from 'react';
import { hot } from 'react-hot-loader';
import Header from './components/Header';
import Feed from './components/Feed';
import PostButton from './components/PostButton'

const App = () => (
  <>
  <Header />
  <Feed />
  <PostButton />
  </>
);

export default hot(module)(App);
