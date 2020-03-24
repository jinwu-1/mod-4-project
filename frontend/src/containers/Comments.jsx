import React from 'react'

const Comment = (props) => {

    return (
        <li>
            {props.comment.username}: {props.comment.text}
        </li>
    )
}

export default Comment