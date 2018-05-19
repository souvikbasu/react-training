import React from 'react';

let basketCount = 1;

const BasketContext = React.createContext();

class App extends React.Component {
  render() {
    return (
      <BasketContext.Provider value={basketCount} >
        <Header />
      </BasketContext.Provider>
    );
  }
}

function Header(props) {
  return (
    <div>
      <BasketIcon />
    </div>
  );
}

function BasketIcon(props) {
  return (
    <BasketContext.Consumer>
      { basketCount => 
        (
          <div>
            <img src="../images/basket.png" />
            <div>{basketCount}</div>
          </div>
        )
      }
    </BasketContext.Consumer>
  );
}

export default App;