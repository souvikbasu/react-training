import { observable, computed } from 'mobx';
import Speaker from './speaker';

export default class SpeakerList {
    @observable speakers = []
    @computed get selectedSpeaker(){
        return this.speakers.filter(b => b.isSelected)[0];
    }

    loadData(){
        this.speakers = [{
                firstName: 'Souvik',
                lastName: 'Basu',
                proposals: [{id: 1, title: 'React Fundamentals'}]
            }, {
                firstName: 'Prasanth',
                lastName: 'Joy',
                proposals: [{id: 2, title: 'React Getting Started'}]
            }, {
                firstName: 'Kartick',
                lastName: 'Shaw',
                proposals: [
                    {id: 3, title: 'React Router'},
                    {id: 4, title: 'React Components'}
                ]
            }].map(s => new Speaker(s));
    }

    selectProposal(proposal) {
        for(let speaker of this.speakers) {
            speaker.isSelected = speaker.proposals.find(p => p.id === proposal.id);
        }
    }
}