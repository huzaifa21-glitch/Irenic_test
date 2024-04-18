import React from 'react';
import { Colors } from '../Utils/utils'; // Assuming you have a Colors utility file

const Wrapper = ({ children, paddingHorizontal = 10, paddingVertical = 10 }) => {
  return (
    <div style={{ 
      flex: 1, 
      backgroundColor:Colors.black,
      padding: `${paddingVertical}px ${paddingHorizontal}px`,
      height: '100vh', // Ensure full height of viewport
      display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center'
    }}>
      {children}
    </div>
  );
};

export default Wrapper;
