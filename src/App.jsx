import React from 'react'
import Post from './components/Post'

const App = () => {

    const posts = [
        { id: 1, title: 'html5', author: 'Hugo', imgUrl: 'https://picsum.photos/id/125/350/350', comments: 'Hola Mundo 1' },
        { id: 2, title: 'css3', author: 'Paco', imgUrl: 'https://picsum.photos/id/666/350/350', comments: 'Hola Mundo 2' },
        { id: 3, title: 'javascript', author: 'Luis', imgUrl: 'https://picsum.photos/id/777/350/350', comments: 'Hola Mundo 3' },
        { id: 4, title: 'python', author: 'Donald', imgUrl: 'https://picsum.photos/id/539/350/350', comments: 'Hola Mundo 4' },
    ]

    return (
        <>
            {/* Comentario en React */}
            <h1>App</h1>
            <Post title='Html5' author='John Doe' imgUrl='https://picsum.photos/id/125/350/350' comments='Hola Mundo 1' />
            <Post title='CSS3' author='Jane Doe' imgUrl='https://picsum.photos/id/666/350/350' comments='Hola Mundo 2' />
            <Post title='Javascript' author='Anna Doe' imgUrl='https://picsum.photos/id/777/350/350' comments='Hola Mundo 3' />
            <Post imgUrl='https://picsum.photos/id/539/350/350' />
            <hr />
            {/* {
                posts.map((post) => {
                    return (
                        <Post key={post.id} title={post.title} author={post.author} imgUrl={post.imgURL} comments={post.comments} />
                    )
                })
            } */}
            
            {/* {
                posts.map(({ id, title, author, imgURL, comments}) => {
                    return (
                        <Post key={id} title={title} author={author} imgUrl={imgURL} comments={comments} />
                    )
                })
            } */}

            
            {
                posts.map((post) => {
                    return (
                        <Post key={post.id} {...post} />
                    )
                })
            }
        </>
    )
}

export default App