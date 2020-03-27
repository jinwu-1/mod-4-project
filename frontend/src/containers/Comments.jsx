import React from 'react'
import { List, Image } from 'semantic-ui-react'

const Comment = (props) => {

    return (
        <List>
            <List.Item>
                <Image avatar src={props.comment.avatar}/>
                <List.Content>
                    <List.Header as='a'> {props.comment.username} </List.Header>
                    <List.Description>
                        {props.comment.text}
                    </List.Description>
                </List.Content>
            </List.Item>
        </List>
    )
}

export default Comment