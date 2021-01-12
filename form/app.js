// Make this component render a styled text input tag
let TextInput = () => {
    return (
        <span>
            <div style={{height: "30px", width: "30px"}}>
                <textaera></textaera>
            </div>
        </span>
    )
}
// Make this component render two styled radio button side by side labelled "yes" and "no"
let YesNoRadio = () => {
    return (
        <span>
            <div>
                <button type="radio">Yes</button>
                <button type="radio">No</button>
            </div>
        </span>
    )
}
// Make this component render a styled button of type "submit"
let SubmitButton = () => {
    return (
        <span>
            <div>
                <button type="submit">Submit</button>
            </div>
        </span>
    )
}
// Make this Component render a form tag with 3 text inputs, two yes/no radio buttons, and a submit button 
let Form = () => {
    return (
        <span>
            <div>
                <TextInput />
                <YesNoRadio />
                <TextInput />
                <YesNoRadio />
                <TextInput />
                <SubmitButton />
            </div>
        </span>
    )
}


ReactDOM.render(<Form />, document.getElementById('root'))