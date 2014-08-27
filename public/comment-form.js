/** @jsx React.DOM */
var CommentForm = React.createClass({
  handleSubmit: function() {
    var author = this.refs.author.getDOMNode().value.trim();
    var text = this .refs.text.getDOMNode().value.trim();
    if (!text || !author) {
      return false;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.refs.author.getDOMNode().value = '';
    this.refs.text.getDOMNode().value = '';
    return false;
  },
  render: function() {
    return (
      <div className="commentForm" onSubmit={this.handleSubmit}>
        <form className="commentForm">
          <input type="text" placeholder="Your name" ref="author" name="comment[author]"/>
          <input type="text" placeholder="Say something..." ref="text" name="comment[text]"/>
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }
});
