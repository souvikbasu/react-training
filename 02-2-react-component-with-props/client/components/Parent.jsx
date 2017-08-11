import React from 'react';
import WelcomeUsingClass from "./WelcomeUsingClass.jsx";

export default class Parent extends React.Component {
    render() {
        return (
            <div  style={{backgroundColor:'yellow'}}>
                <div>This component is composed of other components</div>
                <WelcomeUsingClass name="Jack"/>
                <WelcomeUsingClass name="Jill"/>
            </div>
        );
    }
}
