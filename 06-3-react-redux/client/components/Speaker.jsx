import React from 'react';
import {connect} from 'react-redux';
import * as speakerActions from '../actions/speakerActions';


function Speaker(props) {
    if (props.person && props.person.firstName) {
        const proposals = props.person.proposals.map(p =>
            <li key={p.id}>
                {p.title}
                <button onClick={props.removeProposal.bind(this, props.person, p)}>Delete</button>
            </li>
        );

        return (
            <div>
                <h1>{props.person.firstName} {props.person.lastName}</h1>
                <div>List of proposals:</div>
                <ul>{proposals}</ul>
            </div>
        );
    } else {
        return <div></div>;
    }
}

const mapStateToProps = (state) => {
    return {
        person: state.selectedSpeaker,
        proposals: state.selectedSpeaker ? state.selectedSpeaker.proposals : []
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeProposal: (speaker, proposal) => dispatch(speakerActions.removeProposal(speaker, proposal))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Speaker);
