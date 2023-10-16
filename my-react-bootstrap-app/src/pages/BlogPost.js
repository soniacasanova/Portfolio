import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogPost.scss';
import Articles from '../components/Data';

const BlogPost = () => {
  const { id } = useParams();
  const article = Articles.find((article) => article.id === parseInt(id, 10));

  if (!article) {
    return <div>Article not found</div>;
  }
  
  // Check if article.content is a string, and if not, convert it to a string
  const content = typeof article.content === 'string' ? article.content : article.content.join('\n\n');

  const paragraphs = content.split('\n\n');

  // Define a function to safely render HTML using dangerouslySetInnerHTML
  const renderHTML = (htmlString) => {
    return { __html: htmlString };
  };

  return (
    <section>
      <div className="container" key={article.id}>
        <div className="spacings-lg-top spacings-sm-bottom">
          <div className="row">
            <div className="unequal-double-column">
              <h1 className="pb-2 animate__animated animate__fadeInUp">{article.title}</h1>
            </div>
            <div className="column"></div>
          </div>
        </div>
      </div>
      <div className="post-banner animate__animated animate__fadeInUp">
        <img src={article.imageBanner} alt={article.title} />
      </div>
      <div className="container spacings-sm-bottom">
        <p></p>
      </div>
      <div className="container-text  spacings-lg-bottom animate__animated animate__fadeInUp">
        {paragraphs.map((paragraph, index) => (
          <p className="content-blog" key={index} dangerouslySetInnerHTML={renderHTML(paragraph)} />
        ))}
      </div>
    </section>
  );
};

export default BlogPost;
