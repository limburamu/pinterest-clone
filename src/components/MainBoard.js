// import React from 'react'
// import Pin from './Pin'

// function MainBoard() {
//   return (
//     <div>
//       <h1>MainBoard</h1>
//       <h1>dadjalfalsfjdlak</h1>
//       <Pin />
//     </div>
//   )
// }

// export default MainBoard


import React, { useEffect, useState } from 'react'
import Pin from './Pin'
import "../styles/MainBoardStyles.css";

const MainBoard = () => {
  const [pinState, setPinState] = useState([]);

  useEffect(() => {
    setPinState([
      {
        imgUrl: 'https://plus.unsplash.com/premium_photo-1673959393317-30c4c8fd6810?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', Text : "Image1"
      },
      {
        imgUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', Text : "Image2"
      },
      {
        imgUrl: 'https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', Text : "Image3"
      },
      {
        imgUrl: 'https://plus.unsplash.com/premium_photo-1674664242929-f562b1069c02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', Text: "Image4"
      },
      {
        imgUrl: 'https://images.unsplash.com/photo-1674744634313-b9249d1b2932?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', Text: "Image5"
      },
      {
        imgUrl: 'https://plus.unsplash.com/premium_photo-1674419072222-672b7a6b071a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', Text: "Image5"
      }
    ])
  }, []);


  return (
    <div className='container'>
      {
        pinState.map((item, ind) => {
          return <Pin key={ind} url={item.imgUrl} altText={item.Text}/>
        })
      }
    </div>
  );
};

export default MainBoard
