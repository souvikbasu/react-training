import React from 'react';
import {connect} from 'react-redux';
import * as speakerActions from '../actions/speakerActions';

function Proposals(props) {
    let proposals = [];

    if (props.speakers) {
        for (let speaker of props.speakers) {
            proposals = proposals.concat(speaker.proposals);
        }
    }

    const proposalsDOM = proposals.map(p =>
        <li key={p.id} onClick={props.selectProposal.bind(this, p)}>
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

const mapStateToProps = (state) => {
    return {
        speakers: state.speakers,
        selectedSpeaker: state.selectedSpeaker
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectProposal: proposal => dispatch(speakerActions.selectProposal(proposal))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Proposals);
