import React from 'react';
import {connect} from 'react-redux';
import * as speakerActions from '../actions/speakerActions';

function Proposals(props) {
    let proposalsDOM;
    if(props.proposals) {
        proposalsDOM = props.proposals.map(p =>
            <li key={p.id} onClick={props.selectProposal.bind(this, p)}>
                {p.title}
            </li>
        );
    }

    return (
        <div>
            <div>List of All Proposals:</div>
            <ul>{proposalsDOM}</ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        proposals: [].concat.apply([], state.speakers.map(s => s.proposals)),
        selectedSpeaker: state.selectedSpeaker
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectProposal: proposal => dispatch(speakerActions.selectProposal(proposal))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Proposals);
