import React from 'react';
import DjinnBox from './djinn_box';

const DjinnList = (props) => {
    return (
        <section className="body">
            {props.djinnlist.map((djinn) => {
                return <DjinnBox djinn={djinn} key={djinn.name}/>
            })}
        </section>
    );
}

export default DjinnList;