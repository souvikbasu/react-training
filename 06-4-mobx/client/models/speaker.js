import { observable } from 'mobx';

export default class Speaker {
    @observable isSelected = false
    @observable proposals = []

    constructor(props){
        Object.assign(this, props)
    }

    removeProposal(proposal) {
        this.proposals.splice(this.proposals.indexOf(proposal), 1);
    }
}