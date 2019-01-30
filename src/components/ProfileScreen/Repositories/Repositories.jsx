import React, { Fragment } from 'react';
import jsonFetch from 'simple-json-fetch';
import styled from 'styled-components';
import siteConfig from '../../../Data/siteData.json';

import Loader from '../Loader/Loader';

const endpoint = `https://api.github.com/users/${siteConfig.githubUsername}/repos?type=owner&sort=updated&per_page=5&page=1`;


class Repositories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      status: 'loading',
    };
  }

  async componentDidMount() {
    const repos = await jsonFetch(endpoint);
    if (repos.json && repos.json.length) {
      this.setState({ repos: repos.json, status: 'ready' });
    }
  }

  render() {
    const { status, repos } = this.state;
    const { className } = this.props;
    return (
      <div className={className}>
        <h2>Latest repositories on Github</h2>
        {status === 'loading' && <div className="repositories__loader"><Loader /></div>}
        {status === 'ready' && repos && (
        <Fragment>
          <div className="repositories__content">
            {repos.map(repo => (
              <Fragment key={repo.name}>
                <div className="repositories__repo">
                  <a className="repositories__repo-link" href={repo.html_url}>
                    <strong>{repo.name}</strong>
                  </a>
                  <div>{repo.description}</div>
                  <div className="repositories__repo-date">
                    Updated:
                    {' '}
                    {new Date(repo.updated_at).toUTCString()}
                  </div>
                  <div className="repositories__repo-star">
                    ★
                    {' '}
                    {repo.stargazers_count}
                  </div>
                </div>
                <hr />
              </Fragment>
            ))}
          </div>
        </Fragment>
        )}
      </div>
    );
  }
}

export default styled(Repositories)`
  position: relative;
  .repositories__content {
    margin-bottom: 40px;
  }

  .repositories__repo {
    position: relative;
  }

  .repositories__repo-link {
    text-decoration: none;
    color: #25303B;
  }

  .repositories__repo-date {
    color: #bbb;
    font-size: 10px;
  }

  .repositories__repo-star {
    position: absolute;
    top: 0;
    right: 0;
  }

  .repositories__loader {
    display: flex;
  }

  hr {
    margin-top: 16px;
  }
`;
