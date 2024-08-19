import React, { Component } from 'react';
// import ReactDisqusComments from 'react-disqus-comments';

class Disqus extends Component {
  constructor(props) {
    super(props);
    this.state = { toasts: [] };
    this.notifyAboutComment = this.notifyAboutComment.bind(this);
    this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this);
  }

  onSnackbarDismiss() {
    const { state } = this;
    const [, ...toasts] = state.toasts;
    this.setState({ toasts });
  }

  notifyAboutComment() {
    const { state } = this;
    const toasts = state.toasts.slice();
    toasts.push({ text: 'New comment available!!' });
    this.setState({ toasts });
  }

  render() {
    const { postNode, siteMetadata } = this.props;
    if (!siteMetadata.disqusShortname) {
      return null;
    }
    const post = postNode.frontmatter;
    const url = siteMetadata.siteUrl + postNode.fields.slug;
    return (
      <div></div>
      // <ReactDisqusComments
      //   shortname={siteMetadata.disqusShortname}
      //   identifier={post.title}
      //   title={post.title}
      //   url={url}
      //   category_id={post.category_id}
      //   onNewComment={this.notifyAboutComment}
      // />
    );
  }
}

export default Disqus;
