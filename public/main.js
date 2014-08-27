/** @jsx React.DOM */

React.renderComponent(
  <CommentBox url="comment-data" pollInterval={2000} />,
  document.getElementById('content')
);
