import React, { useEffect, useState } from 'react';
import { getBlogs } from '../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Footer from './Footer';

const Articles = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs()
      .then((response) => {
        const publishedBlogs = response.data.filter((blog) => blog.status === 'Published' || blog.status === 'published');
        setBlogs(publishedBlogs);
      })
      .catch(console.error);
  }, []);

  return (
    <>
    <Header />
    
    <div className="container mt-5">
      <h1 className="mb-4 text-center">قائمة المقالات</h1>
      <div className="row">
        {blogs.map((blog, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <img
                src={`http://localhost:7000${blog.photo}`}
                className="card-img-top"
                alt={blog.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <a href={`/${blog.slug}`} className="text-decoration-none text-dark">
                    {blog.title}
                  </a>
                </h5>
                <p className="card-text">{blog.metadescription}</p>
              </div>
              <div className="card-footer">
                <a href={`/${blog.slug}`} className="btn btn-primary w-100">
                  قراءة المزيد
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Articles;
