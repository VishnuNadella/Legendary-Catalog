import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component"
import "./directory.styles.scss"

class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: "Cars",
                    imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2018-rolls-royce-phantom-1536152159.png",
                    id: 1,
                    linkUrl: "cars",
                },
                {
                    title: "Bikes",
                    imageUrl: "https://i.pinimg.com/736x/c6/09/b3/c609b348112a6a299bce4ab930863a94.jpg",

                    id: 2,
                    linkUrl: "bikes",
                },
                {
                    title: "Planes",
                    imageUrl: "https://cdn.boatinternational.com/convert/files/2021/11/a6f01e70-46d7-11ec-ab39-f5a44e338370-Gulfstream-G700-credit-Gulfstream-Aviation.jpg/r%5Bwidth%5D=1920/a6f01e70-46d7-11ec-ab39-f5a44e338370-Gulfstream-G700-credit-Gulfstream-Aviation.jpg",
                    id: 3,
                    linkUrl: "planes",
                },
                {
                    title: "Yatch",
                    imageUrl: "https://c4.wallpaperflare.com/wallpaper/408/649/315/yacht-concept-luxury-wallpaper-preview.jpg",
                    size: "large",
                    id: 4,
                    linkUrl: "yatch",
                },
                {
                    title: "Computers",
                    imageUrl: "https://www.wepc.com/wp-content/uploads/2021/03/Custom-Water-Cooling-EKWB.jpg",
                    size: "large",
                    id: 5,
                    linkUrl: "computers",
                },
            ],

        }
    }
    render () {
        return (
            <div className = "directory-menu">
                {/* {
                    this.state.sections.map(({ title, imageUrl, id, size }) => (
                        <MenuItem key = {id} title = {title} imageUrl = {imageUrl} size = {size} />
                    ))
                } */}
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key = {id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
    
}

export default Directory;