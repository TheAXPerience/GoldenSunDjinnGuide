import React from 'react';

const CategorySelector = (props) => {
    return (
        <section className="dropdown">
            <label htmlFor="category">Choose a Category</label><br/>
            <select name="category" onChange={(e) => props.changeCategory(e.target.value)}>
                {props.categories.map((category) => {
                    return (
                        <option value={category.query} key={category.label}>
                            {category.label}
                        </option>
                    )
                })}
            </select>
        </section>
    );
}

export default CategorySelector;