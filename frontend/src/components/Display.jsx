import React from 'react';

var Display = function(props) {
  var {items, deletion} = props;
  return (
    <div>
      {items.map(item =>
        <div>
          <li>
            <button onClick={() => deletion(item._id)}>X</button>
            {item.item} {item.qty}
          </li>
        </div>
      )}
    </div>
  )
}

export default Display;