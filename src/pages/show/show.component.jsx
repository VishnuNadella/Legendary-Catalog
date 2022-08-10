import React, { Component } from "react";

import show_data from "./show.data";

import CollectionPreview from "../../components/preview-collection/preview-collection.component"

class ShowPage extends Component {
    constructor (props) {
        super (props);

        this.state = {
            collections: show_data
        }
    }
    render() {
        const { collections } = this.state
        return (
            <div className = "show-page">
                {
                    collections?.map( ({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key = { id } {...otherCollectionProps } />
                    ))
                }
            </div>
        )
    }
}

export default ShowPage