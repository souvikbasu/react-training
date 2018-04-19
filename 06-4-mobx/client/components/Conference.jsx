import React from 'react';
import { observer } from "mobx-react";
import Proposals from "./Proposals.jsx";
import Speaker from "./Speaker.jsx";

@observer
export default class Conference extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Proposals speakerList={this.props.speakerList} />
                <Speaker person={this.props.speakerList.selectedSpeaker} />
            </div>
        );
    }
}
