export const selectProposal = (proposal) => {
    return {
        type: 'SELECT_PROPOSAL',
        proposal: proposal
    }
};

export const removeProposal = (speaker, proposal) => {
    return {
        type: 'REMOVE_PROPOSAL',
        speaker: speaker,
        proposal: proposal
    }
};

