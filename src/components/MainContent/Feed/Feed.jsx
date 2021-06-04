import React from 'react'
import InputOptions from '../CreatePost/InputOptions';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import CommentIcon from '@material-ui/icons/ChatOutlined';
import ShareIcon from '@material-ui/icons/ShareOutlined';
import SendIcon from '@material-ui/icons/Send';
import { grey } from '@material-ui/core/colors';
import "./Feed.css"


function Feed({name, description, message, url}) {
    return (
        <div className="feed">
            <div className="feed__header">
                <img src={url}></img>
                <div className="feed__info">
                    <a>{name}</a>
                    <p>{description}</p>
                </div>
            </div>
            <div className="feed__body">
                <p>{message}</p>
            </div>
            <div className="feed__buttons">
                <InputOptions title="Like" Icon={ThumbUpAltOutlinedIcon} color={grey}></InputOptions>
                <InputOptions title="Comment" Icon={CommentIcon} color={grey}></InputOptions>
                <InputOptions title="Share" Icon={ShareIcon} color={grey}></InputOptions>
                <InputOptions title="Send" Icon={SendIcon} color={grey}></InputOptions>
            </div>
        </div>
    )
} 

export default Feed
