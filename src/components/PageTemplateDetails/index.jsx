import React from 'react';
import Sidebar from '../Sidebar';
import './style.scss';
import { formatReadingTime } from '../../utils/helpers';

class PageTemplateDetails extends React.Component {
  render() {
    const { data } = this.props;
    const page = data.markdownRemark;

    return (
      <div>
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">
            <div className="page">
              <h1 className="page__title">{page.frontmatter.title}</h1>
              <p
                style={{
                  // ...scale(-1 / 5),
                  display: 'block',
                  // marginBottom: rhythm(1),
                  // marginTop: rhythm(-1),
                }}
              >
                {page.frontmatter.date}
                {` • ${formatReadingTime(page.timeToRead)}`}
              </p>
              <div
                className="page__body"
                /* eslint-disable-next-line react/no-danger */
                dangerouslySetInnerHTML={{ __html: page.html }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageTemplateDetails;
