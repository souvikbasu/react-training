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
                    speaker = {
                        ...speaker,
                        proposals: proposals
                    };

                    return {
                        ...state,
                        speakers: [
                            ...state.speakers.slice(0, i),
                            speaker,
                            ...state.speakers.slice(i + 1)
                        ]
                    };
                }
            }

        default:
            return state;
    }
};