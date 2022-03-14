//Przycisk - Dodawanie litery a

class App extends React.Component {

    state = {
        text: "",
        number: ""
    }
    
    handleClick = () => {
        // this.state.text += "a";
        // console.log(this.state.text)
        const letter = "a"
        const number = "9"

        this.setState({
            text: this.state.text + letter,
            number: this.state.number + number
        })
    }
    render(){
        return (
            <>
                <button onClick={this.handleClick}>Dodaj "A" i "9"</button>
                <h1>{this.state.text + this.state.number}</h1>
                <h1>{this.state.number}</h1>
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))