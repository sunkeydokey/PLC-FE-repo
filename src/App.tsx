import { Route, Routes } from 'react-router-dom';

import { Layout } from '@/routes/Layout';
import { Home } from '@/routes/Home';
import { DashBoard } from '@/routes/DashBoard';
import { Control } from '@/routes/Control';
import { Log } from '@/routes/Log';
import { Profile } from '@/routes/Profile';
import { Login } from '@/routes/Login';
import { Signup } from '@/routes/Signup';

export const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/control' element={<Control />} />
        <Route path='/log' element={<Log />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Route>
    </Routes>
  );
};
