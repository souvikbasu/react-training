import React from 'react';
import Proposals from "./Proposals.jsx";
import Speaker from "./Speaker.jsx";

export default class Conference extends React.Component {
    constructor(props) {
        super(props);
        props.speakerList.selectedSpeaker = props.speakerList.speakers[0];
        this.state = props.speakerList;

        this.updateSelectedSpeaker = this.updateSelectedSpeaker.bind(this);
        this.updateProposals = this.updateProposals.bind(this);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    updateSelectedSpeaker(selectedSpeaker) {
        this.setState({
            selectedSpeaker: selectedSpeaker
        });
    }

    updateProposals() {
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <Proposals speakerList={this.state} onChange={this.updateSelectedSpeaker}/>
                <Speaker person={this.state.selectedSpeaker} onChange={this.updateProposals}/>
            </div>
        );
    }
}