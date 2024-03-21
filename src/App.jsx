// import {
//   Route,
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
// } from "react-router-dom";

// import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import Sidebar from "./components/Sidebar";

const App = () => {
  //   const router = createBrowserRouter(
  //     createRoutesFromElements(
  //       <Route path="/" element={<MainLayout className="bg-zinc-700" />}>
  //         <Route index element={<HomePage />} />
  //         <Route path='/artificium' element={<Artificium />} />

  //         <Route path='*' element={<NotFoundPage />} /> */}
  //       </Route>
  //     )
  //   );

  //   return <RouterProvider router={router} />;
  // };

  return (
    <div className="h-full w-full flex flex-row bg-[#1f1f24] ">
      <Sidebar />
      <MainLayout />
    </div>
  );
};

export default App;
