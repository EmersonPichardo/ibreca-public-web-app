import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Result } from 'antd';

import _Layout from './pages/_layout/_layout';
import Home from './pages/home/home';
import BlogEntriesList from './pages/blog/entries/list/blogEntriesList';
import BlogEntriesDetails from './pages/blog/entries/details/blogEntriesDetails';

import './index.css';
import './styles/css/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<_Layout />}>
          <Route index element={<Home />} />
          <Route path="blog/entries" element={<BlogEntriesList />} />
          <Route path="blog/entries/{id}" element={<BlogEntriesDetails />} />

          <Route path="*" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
