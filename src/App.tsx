import { Route, Routes } from 'react-router-dom';

import { Home } from '@/routes/Home';

import { DashBoard } from '@/routes/DashBoard';
import { Control } from '@/routes/Control';
import { Log } from '@/routes/Log';
import { Profile } from '@/routes/Profile';
import { Edit } from '@/routes/Edit';

import { Login } from '@/routes/Login';
import { Signup } from '@/routes/Signup';

import { ErrorPage } from '@/routes/ErrorPage';
import { NotFound } from '@/routes/NotFound';

import { Layout } from '@/ui/Layout';

export const App = () => {
  return (
    <Routes>
      <Route element={<Layout needLogin={true} />}>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/control' element={<Control />} />
        <Route path='/log' element={<Log />} />
        <Route path='/profile' element={<Profile />}>
          <Route path='/profile/edit' element={<Edit />}></Route>
        </Route>
        <Route path='/error' element={<ErrorPage />} />
        <Route path='/*' element={<NotFound />} />
      </Route>
      <Route element={<Layout needLogin={false} />}>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};
