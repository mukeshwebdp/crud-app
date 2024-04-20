import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './App.css';
import User from './components/getUser/User';
import Add from './components/adduser.js/Add';
import Edit from './components/updateUser.js/Edit';


function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <User />
    },
    {
      path: '/add',
      element: <Add />
    },
    {
      path: '/edit/:id',
      element: <Edit/>
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
