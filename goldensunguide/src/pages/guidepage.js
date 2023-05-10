import React from 'react';
import CategorySelector from 'category_selector';
import DjinnList from 'djinn_list';

export class GuidePage extends React.Component {
    constructor(props) {
        super(props);
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
