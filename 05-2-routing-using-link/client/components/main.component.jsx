import React, {Component} from 'react';
import { Link } from 'react-router'

class Main extends Component {
    render(){
        return(
            <div style={{ backgroundColor: 'orange' }}>
                <div style={{textAlign: 'center'}}>
                    <h1>This is Main Component</h1>
                </div>

                <ul>
                    <li><Link to="/" activeClassName="active">Home</Link></li>
                    <li><Link to="/cars" activeClassName="active">Car</Link></li>
                    <li><Link to="/about" activeClassName="active">About</Link></li>
                </ul>

                <div className="container" style={{ padding: 20 }}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main