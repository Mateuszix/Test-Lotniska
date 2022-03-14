class App extends React.Component {
    state = {
      counter: 0
    }
    render() {
      return (
        <div>
          <h1>Hello!</h1>
        </div>
      );
    }
  }
  class Country {
      constructor(name){
          this.name = name;
          this.showName = () => console.log(this.name);
          
      }
      showCountryName(){
          console.log(`Nazwa kraju to ${this.name}`);
      }
  }
  const Poland = new Country('Polska');
  const Atlantyda = new Country('Atlantyda');

  Poland.showCountryName();
  Atlantyda.showCountryName();
  Poland.showName();
  Atlantyda.showName();

  /////////////////////////////////////////////////////
  //Dziedziczenie/////////////////////////////////////
  ////////////////////////////////////////////////////
    class Person {
        constructor(name){
            this.name = name;
        }
        showName(){
            console.log(`Imię osoby to ${this.name}`);
        }
    }
    class Student extends Person {
        constructor(name = "", degrees = []){
            super(name)
            this.degrees = degrees;
        }
        showDegree(){
            const completed = this.degrees.filter(degree => degree >2)
            console.log(`Student ${this.name} ma stopnie ${this.degrees} i zaliczył już ${(completed.length)} przedmioty`);
        }
    }
    const Mateusz = new Student("Mateusz", [2, 3, 4, 5, 2, 4])
    Mateusz.showDegree()

  ReactDOM.render(<App />, document.getElementById('root'))