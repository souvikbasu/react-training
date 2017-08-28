import React from 'react';

export default class Speaker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {proposals: props.person.proposals};
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        this.setState({proposals: nextProps.person.proposals});
    }

    componentWillUnmount() {
    }

    removeProposal(proposal) {
        let proposals = this.state.proposals;
        proposals.splice(proposals.indexOf(proposal), 1);
        this.setState({
            proposals: proposals
        });
        this.props.onChange(proposals);
    }

    render() {
        const proposals = this.state.proposals.map(p =>
            <li key={p.id}>
                {p.title}
                <button onClick={this.removeProposal.bind(this, p)}>Delete</button>
            </li>
        );
        return (
            <div>
                <h1>{this.props.person.firstName} {this.props.person.lastName}</h1>
                <div>List of proposals:</div>
                <ul>{proposals}</ul>
            </div>
        );
    }
}