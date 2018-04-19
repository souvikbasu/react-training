import React from 'react';
import { observer } from "mobx-react";

@observer
export default class Speaker extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let proposals = '';
        if(this.props.person.proposals) {
            proposals = this.props.person.proposals.map(p =>
                <li key={p.id}>
                    {p.title}
                    <button onClick={() => this.props.person.removeProposal(p)}>Delete</button>
                </li>
            );
        }
        return (
            <div>
                <h1>{this.props.person.firstName} {this.props.person.lastName}</h1>
                <div>List of proposals:</div>
                <ul>{proposals}</ul>
            </div>
        );
    }
}
