import React from 'react';
import ReactDOM from 'react-dom';
import SpeakerList from './models/speakerList';
import Conference from "./components/Conference.jsx";

const speakerList = new SpeakerList();
speakerList.loadData();
speakerList.speakers[0].isSelected = true;

ReactDOM.render(<Conference speakerList={speakerList} />,
    document.getElementById('root')
);
