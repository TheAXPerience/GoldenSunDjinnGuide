import React from 'react';
import CategorySelector from './category_selector';
import DjinnList from './djinn_list';
import axios from 'axios';

const BASE_URL = "http://localhost:8000/api/"

function django_fetch(query) {
    // fetch data from Django (http://localhost:8000/api/${url})
    // parse JSON response to get list
    // return list
    const url = BASE_URL + query;
    const response = axios.get(url);
    return response.data;

    /*
    if (query[0] !== "?") {
        return [{
            "game": "goldensun",
            "query": "?game=1",
            "label": "All"
        }, {
            "game": "goldensun",
            "query": "?game=1&chapter=1",
            "label": "Chapter 1: Vale"
        }];
    } else {
        return [{
            "name": "Flint",
            "game": 1,
            "coltype": 1,
            "chapter": 1,
            "location": "Vale",
            "description": "Isaac",
            "pic_url": "/assets/goldensun/venus_djinni.png"
        }, {
            "name": "Gust",
            "game": 1,
            "coltype": 3,
            "chapter": 1,
            "location": "Bilibin",
            "description": "The sewers",
            "pic_url": "/assets/goldensun/jupiter_djinni.png"
        }, {
            "name": "Chill",
            "game": 2,
            "coltype": 4,
            "chapter": 4,
            "location": "Gondowan",
            "description": "West",
            "pic_url": "/assets/goldensun/mercury_djinni.png"
        }, {
            "name": "Forge",
            "game": 3,
            "coltype": 2,
            "chapter": 1,
            "location": "Camp Camp",
            "description": "Matthew",
            "pic_url": "/assets/darkdawn/forge.png"
        }, {
            "name": "Zagan",
            "game": 2,
            "coltype": 5,
            "chapter": 2,
            "location": "Indra",
            "description": "Cave",
            "pic_url": "/assets/darkdawn/zagan.png"
        }];
    }
    */
}

class GuidePage extends React.Component {
    constructor(props) {
        super(props);
        // fetch data for CategorySelector
        this.state = {
            categories: django_fetch("categories/" + props.game),
            djinnlist: [],
            category: ""
        }
    }

    componentDidMount() {
        this.changeCategory(this.state.categories[0].query);
    }

    changeCategory = (category) => {
        if (category === this.state.category) {
            return;
        }

        this.setState({
            category: category,
            djinnlist: django_fetch(category)
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