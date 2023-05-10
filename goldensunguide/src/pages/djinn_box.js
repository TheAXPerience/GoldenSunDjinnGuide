import React from 'react';

const DjinnBox = (props) => {
    // determine div classification
    const { name, coltype, location, description, pic_url } = props.djinn;
    var classes = "djinn"
    switch (coltype) {
        case 1:
            classes += " venus";
            break;
        case 2:
            classes += " mars";
            break;
        case 3:
            classes += " jupiter";
            break;
        case 4:
            classes += " mercury";
            break;
        default:
            classes += " summon";
            break;
    }

    return (
        <div className={classes} key={name}>
            <h1>{name}</h1>
            <section>
                <div className="image">
                    <img src={pic_url} alt={name} />
                </div>
                <div className="info">
                    <p><b>Location</b>: {location}</p>
                    <p>{description}</p>
                </div>
            </section>
        </div>
    );
}

export default DjinnBox;