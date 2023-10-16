import React from 'react';
import Articles from '../components/Data';
import './Blog.scss';
import { Link } from 'react-router-dom';

const BlogList = () => {
  return (
    <section>
        {/* Title */}
        <div className="spacings"></div>
        <div className="spacings-lg-bottom">
          <div className="spacings-sm-bottom row-responsive animate__animated animate__fadeInUp">
            {Articles.map((article) => (
              <div className='row row-responsive ' key={article.id}>
              <div className="column p-0">
                <div className="img-box-left">
                  <img src={article.imageBanner} alt={article.title} />
                </div>
                </div>
                <div className="column justify-content-center">
                  <div className="blog-home-text">
                    <div className="group">
                      <span className="tag">{article.tag}</span>
                      <Link to={`/post/${article.id}`}>
                        <h2 className="display-4">{article.title}</h2>
                      </Link>
                    </div>
                  </div>
                </div>
                </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default BlogList;
