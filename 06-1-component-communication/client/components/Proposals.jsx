import React from 'react';

export default class Proposals extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.speakerList;
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        this.setState({speakers: nextProps.speakerList.speakers});
    }

    componentWillUnmount() {
    }

    render() {

        let proposals = [];
        for(let speaker of this.state.speakers) {
            proposals = proposals.concat(speaker.proposals);
        }

        const proposalsDOM = proposals.map(p =>
            <li key={p.id} onClick={this.selectProposal.bind(this, p)}>
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

    selectProposal(proposal) {
        for(let speaker of this.state.speakers) {
            if(speaker.proposals.find(p => p.id === proposal.id)) {
                this.props.onChange(speaker);
            }
        }
    }
}