// Make this component render like the Windows Logo:
{/* <a href="https://goo.gl/images/mY5Qdv" target="_blank"></a> */}
let FirstComponent = () => {
    return (
        <span> 
            <div>
                <img src="https://www.channelweb.co.uk/w-images/daa6fb74-bb2f-48c9-a399-464612d8252a/0/windowslogo-580x358.jpg" />
            </div>
        </span>
    )
}

ReactDOM.render(<FirstComponent />, document.getElementById('root'))