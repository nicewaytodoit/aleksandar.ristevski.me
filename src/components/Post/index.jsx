import React from 'react';
import { Link } from 'gatsby';
import moment from 'moment';
import './style.scss';
import { formatReadingTime, formatDate } from '../../utils/helpers';

class Post extends React.Component {
  render() {
    const { data } = this.props;
    const {
      title,
      date,
      category,
      description,
    } = data.node.frontmatter;
    const page = data.node;
    const { slug, categorySlug } = data.node.fields;

    return (
      <div className="post">
        <h2 className="post__title mgbt-0">
          <Link className="post__title-link" to={slug}>
            {title}
          </Link>
        </h2>
        <div className="post__meta mgbt-0-5">
          <time
            className="post__meta-time"
            dateTime={moment(date).format('MMMM D, YYYY')}
          >
            {`${formatDate(page.frontmatter.date, 'DD MMM YYYY').toUpperCase()}`}
          </time>
          <span className="post__meta-divider"> • </span>
          {`${formatReadingTime(page.timeToRead)}`}
          <span className="post__meta-divider"> • </span>
          <span className="post__meta-category" key={categorySlug}>
            <Link to={categorySlug} className="post__meta-category-link">
              {category}
            </Link>
          </span>
        </div>
        <p className="post__description mgbt-0">
          {description}
        </p>
        <p className="mgbt-0-5">
          <Link className="post__readmore" to={slug}>
          Read
          </Link>
        </p>
      </div>
    );
  }
}

export default Post;
