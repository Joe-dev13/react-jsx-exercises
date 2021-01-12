// Design a header for your blog
let Header = () => {
    return <span>
        <div id='header'>
            <h1>Reactionary Blogs</h1>
            <date></date>
        </div>
    </span>
}
// Write and design your blog article
let Article = () => {
    return <span>
        <div>
            <p>
            You could see there was text coming out of her eyes, text coming out of her wherever. Some people have an ability to write placeholder text... It's an art you're basically born with. You either have it or you don't. I think the only card she has is the Lorem card. I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively. I will write some great, great text on your website’s Southern border, and I will make Google pay for that text. Mark my words.
            When other websites give you text, they’re not sending the best. They’re not sending you, they’re sending words that have lots of problems and they’re bringing those problems with us. They’re bringing mistakes. They’re bringing misspellings. They’re typists… And some, I assume, are good words. That other text? Sadly, it’s no longer a 10. Despite the constant negative ipsum covfefe. The other thing with Lorem Ipsum is that you have to take out its family.
            Some people have an ability to write placeholder text... It's an art you're basically born with. You either have it or you don't. Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. The concept of Lorem Ipsum was created by and for the Chinese in order to make U.S. design jobs non-competitive. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen.
            I don't think anybody knows it was Russia that wrote Lorem Ipsum, but I don't know, maybe it was. It could be Russia, but it could also be China. It could also be lots of other people. It also could be some wordsmith sitting on their bed that weights 400 pounds. Ok? The best taco bowls are made in Trump Tower Grill. I love Hispanics! Look at that text! Would anyone use that? Can you imagine that, the text of your next webpage?! Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. This placeholder text is gonna be HUGE.
            I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. Look at that text! Would anyone use that? Can you imagine that, the text of your next webpage?! We are going to make placeholder text great again. Greater than ever before.
            </p>
        </div>
    </span>
}
// Design a footer for your blog
let Footer = () => {
    return <span>
        <div>
        Reactionary Blogs 2021
        </div>
    </span>
}
// Make this Component render the header, article, and footer
let Blog = () => {
    return <span>
            <div>
                <Header />
                <Article />
                <Footer />
            </div>
    </span>
}


ReactDOM.render(<Blog />, document.getElementById('root'))