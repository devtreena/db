import React from 'react';
import { useDispatch} from 'react-redux'
import Homepage from './pages/Homepage';

import * as actions from './redux/actions'

const App = () => {
  const dispatch = useDispatch();
  dispatch(actions.getPosts.getPostsRequest());

  return (
    <Homepage />
  )
}

export default App