// import React, { useState, useEffect } from 'react';
// import Button from '@material-ui/core/Button';

// let x;
// const fetchData = async () => {
//   const response = await fetch('http://127.0.0.1:5000/api2');
//   const data = await response.json();
//   x = data;
//   // console.log(
//   return data;
// };

// const FetchButton = () => {
//   const [click, setClick] = useState(false);
//   useEffect(() => {
//     fetchData();
//   }, [click]);

//   return (
//     <div>
//       <div className="">
//         <Button
//           color="secondary"
//           onClick={() => {
//             setClick(!click);
//           }}
//           style={{
//             width: '100%',
//             display: 'flex',
//             justifyContent: 'center',
//             background: '#abc',
//           }}
//         >
//           Load Python Scripts
//         </Button>
//         {/* x.col.'1' */}
//         {click && <h1 style={{ textAlign: 'center' }}>{x.col1['1']}</h1>}
//       </div>
//     </div>
//   );
// };

// export default FetchButton;
