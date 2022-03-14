const header = <h1 className="title">Witaj na stronie</h1>

const handleClick = () => alert("kliknął")

const main = (
    <div>
        <h1 onClick={handleClick} className="red">Pierwszy artykuł</h1>
        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
    </div>
)
const classBig = "big";
const text = "testowa wiadomośc do footera"
const footer = (
    <footer>
        {text}
        <p className={classBig}>Stopka</p>
    </footer>
)
const app = [header, main, footer]

ReactDOM.render(app, document.getElementById('root'))



// console.log(React);
// console.log(ReactDOM);
// const element = <div>Pierwszy element React</div>

// const element2 = React.createElement(
//     "div",
//     null,
//     "Pierwszy element React"
// )

// const element3 = (
//     <div>
//         <p id="main" className="red">tekst</p>
//     </div>
// ) 

// const element5 = (
//     <>
//         <section></section>
//         <section></section>
//     </>
// )