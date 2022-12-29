import React, {useContext} from 'react';
import { ChannelContext, UserContext } from '../App';

function ComponentC() {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
  return (
    <p>Component C - user context value is <strong>{user}</strong>, the channel context value is <strong>{channel}</strong> </p>
  )
}

export default ComponentC;