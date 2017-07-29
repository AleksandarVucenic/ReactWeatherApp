var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are few example locantions to try out:</p>
      <ol>
        <li>
          <Link to="/?location=Novi Sad">Novi Sad, Searbia</Link>
        </li>
        <li>
          <Link to="/?location=Belgrade">Belgrade, Searbia</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
