
//komponent funkcyjny, bezstanowy
const Header = () => {
    return (
        <div>
            <h1>Witaj na stronie</h1>
        </div>
    )
}

//komponent klasowy, stanowy
class Blog extends React.Component {
    // state = {
    //     number: 0,
    // }
    render(){
        return (
            <section>
                <h1>Artykuł</h1>
                <p>Lorem impus Lorem impus Lorem impus Lorem impus Lorem impus 
                Lorem impus Lorem impus Lorem impus Lorem impus Lorem impus 
                Lorem impus Lorem impus Lorem impus Lorem impus Lorem impus</p>
            </section>
        )
    }
}
const App = () => {
    return (
        <>
            <Header/>
            <Blog/>
        </>
        
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))