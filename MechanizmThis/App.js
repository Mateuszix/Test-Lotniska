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
  const cat = {
      kids: ['kot1', 'kot2'],
      showKidsNames(){
          console.log(`kot ma potomstwo: ${this.kids}`);
          const showKidsNumber = function(){
              console.log(this.kids.length);
          }.bind(this)
          showKidsNumber()
      }
  }
  cat.showKidsNames()
  
  ReactDOM.render(<App />, document.getElementById('root'))