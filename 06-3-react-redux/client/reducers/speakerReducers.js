export default (state = {}, action) => {
    const selectedProposal = action.proposal;
    switch (action.type) {
        case 'SELECT_PROPOSAL':
            for (let speaker of state.speakers) {
                if (speaker.proposals.find(p => p.id === selectedProposal.id)) {
                    return Object.assign({}, state, {selectedSpeaker: speaker});
                }
            }
            return state;

        case 'REMOVE_PROPOSAL':
            let newState = Object.assign({}, state);
            newState.speakers = [...newState.speakers];
            for (let speaker of newState.speakers) {
                speaker.proposals = [...speaker.proposals];
                let proposal = speaker.proposals.find(p => p.id === selectedProposal.id);
                if (proposal) {
                    speaker.proposals.splice(speaker.proposals.indexOf(proposal), 1);
                }
            }

            newState.selectedSpeaker = newState.speakers.find(s => s.firstName === state.selectedSpeaker.firstName);
            return newState;
        default:
            return state;
    }
};