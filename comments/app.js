// Make this component render an image
let ProfilePic = () => {
    return (
        <span>
            <div>
                <img />
            </div>
        </span>
    )
}
// Make this component render a username in bold above the comment text
let CommentBody = () => {
    return (
        <span>
            <div id='user'>
                <h1>username</h1>
            </div>
            <div id='comment'>
            You could see there was text coming out of her eyes, text coming out of her wherever. Some people have an ability to write placeholder text... It's an art you're basically born with. You either have it or you don't. I think the only card she has is the Lorem card. I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively. I will write some great, great text on your website’s Southern border, and I will make Google pay for that text. Mark my words.
            When other websites give you text, they’re not sending the best. They’re not sending you, they’re sending words that have lots of problems and they’re bringing those problems with us. They’re bringing mistakes. They’re bringing misspellings. They’re typists… And some, I assume, are good words. That other text? Sadly, it’s no longer a 10. Despite the constant negative ipsum covfefe. The other thing with Lorem Ipsum is that you have to take out its family.
            </div>
        </span>
    )
}
// Make each comment render a profile picture and the comment body
let Comment = () => {
    return (
        <span>
            <div>
                <ProfilePic />
                <CommentBody />
            </div>
        </span>
    )
}
// Make this component render a list of comments
let Comments = () => {
    return (
        <span>
            <div>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </span>
    )
}

ReactDOM.render(<Comments />, document.getElementById('root'))