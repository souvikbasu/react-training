import React from 'react';

const BasketContext = React.createContext();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basketCount: 0
    };

    this.addItemToBasket = () => {
      this.setState(state => ({
        basketCount: state.basketCount + 1
      }));
    }
  }

  render() {
    return (
      <BasketContext.Provider value={this.state.basketCount} >
        <Header />
        <Product title="Mango" addItem={this.addItemToBasket}/>
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
            <div>{basketCount}</div>
          </div>
        )
      }
    </BasketContext.Consumer>
  );
}

function Product(props) {
  return (
    <BasketContext.Consumer>
      { basketCount => 
        (
          <div>
            <div>{props.title}</div>
            <button onClick={props.addItem}>ADD</button>
          </div>
        )
      }
    </BasketContext.Consumer>
  );
}

export default App;
