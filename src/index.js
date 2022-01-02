import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import _Layout from './pages/_layout/_layout';
import NotFound from './pages/notFound/notFound';
import Home from './pages/home/home';
import BlogList from './pages/blog/list/blogList';
import BlogDetails from './pages/blog/details/blogDetails';

import './index.css';
import './styles/css/antd.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<_Layout />}>
        <Route index element={<Home />} />
        <Route path="/blog/" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetails />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
