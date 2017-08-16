import React, {Component} from 'react';

class Main extends Component {
    render(){
        return(
            <div style={{ backgroundColor: 'orange' }}>
                <div style={{textAlign: 'center'}}>
                    <h1>This is Main Component</h1>
                </div>

                <div>
                    <a href="#" style={{ margin: 10 }}>Home</a>
                    <a href="#car"  style={{ margin: 10 }}>Car</a>
                    <a href="#about"  style={{ margin: 10 }}>About</a>
                </div>

                <div className="container" style={{ padding: 20 }}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main