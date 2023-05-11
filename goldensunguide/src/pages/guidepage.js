import React from 'react';
import CategorySelector from './category_selector';
import DjinnList from './djinn_list';
import axios from 'axios';

const BASE_URL = "http://localhost:8000/api/"

async function django_fetch(query) {
    // fetch data from Django (http://localhost:8000/api/${url})
    // parse JSON response to get list
    // return list
    const url = BASE_URL + query;
    const response = await axios.get(url);
    return response.data;
}

class GuidePage extends React.Component {
    constructor(props) {
        super(props);
        // fetch data for CategorySelector
        this.state = {
            categories: [],
            djinnlist: [],
            category: ""
        }
    }

    componentDidMount() {
        django_fetch("categories/" + this.props.game).then(result => {
            this.setState({
                categories: result
            })
            this.changeCategory(result[0].query);
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.game !== this.props.game) {
            this.componentDidMount();
        }
    }

    changeCategory = (category) => {
        if (category === this.state.category) {
            return;
        }

        django_fetch(category).then(result => {
            this.setState({
                category: category,
                djinnlist: result
            });
        });
    }

    render() {
        let logolink = "/assets/" + this.props.game + "_logo.png"

        return (
            <>
                <div className="logo">
                    <img src={logolink} alt={this.props.game} />
                </div>
                <CategorySelector
                    categories={this.state.categories}
                    changeCategory={this.changeCategory}
                />
                <DjinnList djinnlist={this.state.djinnlist}/>
            </>
        );
    }
}

export default GuidePage;