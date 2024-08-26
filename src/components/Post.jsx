import React from 'react'
import PropTypes from 'prop-types'
import './Post.css'

const Post = ({ 
    title = 'html5', 
    author = 'Rigoberto', 
    imgUrl = 'https://picsum.photos/id/304/350/350', 
    comments = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur neque sapiente dolor ratione? Ipsa, beatae iure magni laudantium voluptatem nulla nemo eius. Fuga, eaque. Repudiandae harum dolores cum corporis veniam?'
}) => {
    return (
        <div className="post">
            <div className="post-header">
                <i className="fa-brands fa-html5 fa-2x"></i>
                <div className='post-title'>
                    <span>{title}</span>
                    <span>{author}</span>
                </div>
                <i className="fa-solid fa-ellipsis-v fa-2x"></i>
            </div>
            <div className="post-body">
                <img src={imgUrl} alt="" />
            </div>
            <div className="post-footer">
                <div className="post-icons">
                    <i className="fa-regular fa-heart fa-2x"></i>
                    <i className="fa-regular fa-comment fa-2x"></i>
                    <i className="fa-regular fa-paper-plane fa-2x"></i>
                    <i className="fa-regular fa-bookmark fa-2x"></i>
                </div>
                <div className="post-comments">
                    <p>Liked by <span>4GeeksAcademy</span>, <span>html5</span>, <span>Web</span> and <span>100.000 others</span></p>
                    <p>{comments}</p>
                </div>
            </div>
        </div>
    )
}

Post.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    imgUrl: PropTypes.string.isRequired,
    comments: PropTypes.string
}

export default Post