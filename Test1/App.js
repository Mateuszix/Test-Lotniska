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
  const users = ["adam", "bogdan", "arkadiusz", "Karolinka"];
  console.log(users);

  const allUsers = [...users, "marek"]
  console.log(allUsers);

  const usersString = users.join(" ");
  console.log(usersString);

  //map()
  const usersFirstLetterUpperCase = users.map(user => user.toUpperCase())
  console.log(usersFirstLetterUpperCase);

  const numbers = [2, 3, 4]
  const doubleNumber = numbers.map(number => number * 2)
  console.log(doubleNumber);

  //forEach()
  const usersAge = [20, 30, 40]
  usersAge.forEach(age => console.log(`W przyszłym roku użytkownik będzie miał ${age+1} lat`))

  let usersTotalAge = 0;
  usersAge.forEach(age => usersTotalAge += age);
  console.log(usersTotalAge);

  const section = document.createElement('section')
  usersAge.forEach((age, index, array) => {
      section.innerHTML += (
          `<h1> Użytkownik ${index + 1} </h1> <p>wiek: ${age}</p>`
      )
      if(index === array.length - 1){
          document.body.appendChild(section);
      }
  })

  //filter()
  const NameWith6Letters = users.filter(user => user.length >= 6)
  console.log(NameWith6Letters);

  const NameWithLetterK = users.filter((user) => {
      return(
          user.indexOf("k") > -1
      )
  })
  console.log(NameWithLetterK);

  //findIndex() i find()
  const customers = [
      { name: "Adam", age: 50 },
      { name: "Mateusz", age: 23},
      { name: "Magda", age: 15},
  ];
  console.log(customers);
  const isUsersAdult = customers.find/*findIndex*/(customer => customer.age <18)
  console.log(isUsersAdult);

  

  
  ReactDOM.render(<App />, document.getElementById('root'))