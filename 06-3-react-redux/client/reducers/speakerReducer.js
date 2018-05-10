export default (state = {}, action) => {
    const selectedProposal = action.proposal;
    switch (action.type) {
        case 'SELECT_PROPOSAL':
            for (let speaker of state.speakers) {
                if (speaker.proposals.find(p => p.id === selectedProposal.id)) {
                    return {
                        ...state,
                        selectedSpeaker: speaker
                    }
                }
            }
            return state;

        case 'REMOVE_PROPOSAL':
            for (let i = 0, speaker; speaker = state.speakers[i]; i++) {
                let proposalIndex = speaker.proposals.indexOf(selectedProposal);
                if (proposalIndex > -1) {
                    const proposals = [
                        ...speaker.proposals.slice(0, proposalIndex),
                        ...speaker.proposals.slice(proposalIndex + 1)
                    ];
                    let newSpeaker = {
                        ...speaker,
                        proposals: proposals
                    };

                    let selectedSpeaker = state.selectedSpeaker;
                    if(selectedSpeaker === speaker) {
                        selectedSpeaker = newSpeaker;
                    }

                    return {
                        ...state,
                        selectedSpeaker: selectedSpeaker,
                        speakers: [
                            ...state.speakers.slice(0, i),
                            newSpeaker,
                            ...state.speakers.slice(i + 1)
                        ]
                    };
                }
            }

        default:
            return state;
    }
};