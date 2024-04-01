import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Board from "../pages/Board";
import NotFound from "../pages/NotFound";
import BoardDetail from "../pages/BoardDetail";

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root />,
    errerElement: <NotFound/>, // 에러 설정
    children: [
      {index: true, element:<Home />}, 
      {path: '/board', element: <Board/>},
      {path: '/board/:bid', element: <BoardDetail />} // : 붙은 게 동적 라우팅 됨
    ]
}
]);

function App() {
  
  return (
    <RouterProvider router={router} />

  );
}

export default App;