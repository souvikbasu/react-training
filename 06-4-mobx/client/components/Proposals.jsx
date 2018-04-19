import React from 'react';
import { observer } from "mobx-react";

@observer
export default class Proposals extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let proposals = [];
        for(let speaker of this.props.speakerList.speakers) {
            for(let proposal of speaker.proposals) {
                proposals.push(proposal);
            }
        }

        const proposalsDOM = proposals.map(p =>
            <li key={p.id} onClick={() => this.props.speakerList.selectProposal(p)}>
                {p.title}
            </li>
        );

        return (
            <div>
                <div>List of All Proposals:</div>
                <ul>{proposalsDOM}</ul>
            </div>
        );
    }
}
