import "./CreatePost.css";


import React from 'react'

function InputOptions({Icon, title ,color}) {
  
    return (
        <div className="post__createpostlist__item">
          {Icon && <Icon style= {{ color : color[500]}}/> }
          <span>{title}</span>
        </div>
    )
}

export default InputOptions
