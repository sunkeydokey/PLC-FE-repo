import { Route, Routes } from 'react-router-dom';

import { Home } from '@/routes/Home';

import { DashBoard } from '@/routes/DashBoard';
import { Control } from '@/routes/Control';
import { Log } from '@/routes/Log';
import { MyPage } from '@/routes/MyPage';
import { Edit } from '@/routes/Edit';

import { Login } from '@/routes/Login';
import { Signup } from '@/routes/Signup';

import { ErrorPage } from '@/routes/ErrorPage';
import { NotFound } from '@/routes/NotFound';

import { Layout } from '@/ui/Layout';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/control' element={<Control />} />
        <Route path='/log' element={<Log />} />
        <Route path='/mypage/' element={<MyPage />} />
        <Route path='/mypage/edit' element={<Edit />}></Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/error' element={<ErrorPage />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
};
