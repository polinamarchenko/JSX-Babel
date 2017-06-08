class FirstComponent extends React.Component {
  render() {
    return <h1>HEllo</h1>
  }
}

class NamedComponent extends React.Component {
  render() {
    return <p>My name is {this.props.name}</p>
  }
}

class Tweet extends React.Component {
  render() {
    return (
      <div>
        <div className = 'tweet-box'>
          <span className = 'tweet-title'>{this.props.username}
              <span className = 'date'>
                @{this.props.name} {this.props.date}
              </span>
          </span>
          <p className = 'tweet-text'>{this.props.message}</p>
        </div>
      </div>
    )
  }
}

class Person extends React.Component {
  render() {
    var ageCheck = this.props.age > 21 ?
      <h3 className="error">Have a drink!</h3> :
      <h3>You must be 21</h3>

    var nameLength = this.props.name.length > 8 ?
    <p>{this.props.name.slice(0,6)}</p> : <p>{this.props.name}</p>

    var hobbies = this.props.hobbies.map(function(hobby, i){
      return <li key={i}>{hobby}</li>;
    })

    return (
      <div>
        <p>Learn some information about this person</p>
        {nameLength}
        {ageCheck}
        <ul>Hobbies:
          {hobbies}
        </ul>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <FirstComponent/>
        <Tweet username="Polinka" name="Polina" date="03.17.2017" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
        <Tweet username="Yeah" name="Philipp" date="04.17.2017" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
        <Person age="31" name = "Polina" hobbies={['Zumba', 'Cooking']}/>
        <Person age="20" name = "Mariyanna" hobbies={['Dancing', 'Photography']}/>
        <Person age="34" name = "Philipp" hobbies={['Football', 'Singing']}/>
      </div>
    );
  }
}
ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
