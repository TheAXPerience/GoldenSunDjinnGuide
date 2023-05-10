import React from 'react';
import CategorySelector from 'category_selector';
import DjinnList from 'djinn_list';

function django_fetch(url) {
    // fetch data from Django (localhost:8000/api/${url})
    // parse JSON response to get list
    // return list
    return [];
}

export class GuidePage extends React.Component {
    constructor(props) {
        super(props);
        // fetch data for CategorySelector
    }

    componentDidUpdate(prevState) {
        // if state changed, fetch data for DjinnList
    }

    render() {
        return (
            <>
                <p>{this.props.game}</p>
                <CategorySelector game={this.props.game} />
                <DjinnList />
            <>
        );
    }
}
