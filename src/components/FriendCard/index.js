import React from "react";

function FriendCard(props) {
  return (
    <div onClick={() => props.clickedFriend(props.id)} role="img" aria-label="click item" className="click-item"
          style={{backgroundImage: `url(${props.image})`}}>
    </div>
  );
}

export default FriendCard;
