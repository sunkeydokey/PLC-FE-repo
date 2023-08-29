import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './pages/Home';
import { DashBoard } from './pages/DashBoard';
import { Control } from './pages/Control';
import { Log } from './pages/Log';
import { Profile } from './pages/Profile';

export const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/control' element={<Control />} />
        <Route path='/log' element={<Log />} />
        <Route path='/profile' element={<Profile />} />
      </Route>
    </Routes>
  );
};
