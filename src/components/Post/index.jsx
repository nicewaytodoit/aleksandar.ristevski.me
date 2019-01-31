import React from 'react';
import { Link } from 'gatsby';
import moment from 'moment';
import './style.scss';
import { formatReadingTime } from '../../utils/helpers';

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
    // console.log('@@@', data);
    const { slug, categorySlug } = data.node.fields;

    return (
      <div className="post">
        <div className="post__meta">
          <time
            className="post__meta-time"
            dateTime={moment(date).format('MMMM D, YYYY')}
          >
            {moment(date).format('MMMM YYYY')}
          </time>
          <span className="post__meta-divider" />
          <span className="post__meta-category" key={categorySlug}>
            <Link to={categorySlug} className="post__meta-category-link">
              {category}
            </Link>
          </span>
        </div>
        <h2 className="post__title">
          <Link className="post__title-link" to={slug}>
            {title}
          </Link>
        </h2>
        <p
          style={{
            // ...scale(-1 / 5),
            display: 'block',
            // marginBottom: rhythm(1),
            // marginTop: rhythm(-1),
          }}
        >
          {date}
          {` • ${formatReadingTime(page.timeToRead)}`}
        </p>
        <p className="post__description">{description}</p>
        <Link className="post__readmore" to={slug}>
          Read
        </Link>
      </div>
    );
  }
}

export default Post;
