const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="social-buttons-container">
    <div className="content-container">
      <h1 className="main-heading">Social Buttons</h1>
      <div className="buttons-container">
        <Button buttonText="Like" className="like-button"></Button>
        <Button buttonText="Comment" className="comment-button"></Button>
        <Button buttonText="Share" className="share-button"></Button>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
