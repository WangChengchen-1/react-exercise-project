// import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import {createHashRouter } from 'react-router-dom';

import Home from '@/pages/Home';
import Login from '@/pages/login';

// function BaseRouter() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }

//配置式写法
const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:'/login',
    element:<Login/>
  }
]);


export default router;
