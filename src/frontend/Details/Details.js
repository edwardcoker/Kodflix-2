import React from "react";
import { Link, Redirect } from "react-router-dom";
//import getGallery from "../gallery-get";
import './Details.css';
//import MovieCovers from "../MovieCovers";

export default class Details extends React.Component {
    constructor() {
        super();
        this.state = {
            gallery: {}
        };
    }

    componentDidMount() {
        fetch('/rest/shows')
        .then(response => response.json())
        .then((data) => {
            let galleryId = this.props.match.params.galleryId;
            let gallery = data.find(gallery => gallery.id === galleryId);
            this.setState({ gallery: gallery});
        });
    }

    render() {
        if (this.state.gallery === undefined) {
            return <Redirect to="/not-found" />;

        } else if (this.state.gallery.id) {
             return (
                <div className="Details">
                    <h1>{this.state.gallery.name}</h1>
                    <div className="content">
                        <div className="text">{this.state.gallery.details}</div>
                        <img src={require(`../images/${this.state.gallery.id}.jpg`)}
                            alt={`${this.state.gallery.title}`} />
                    </div>
                    <Link to="/">Back to Home Page</Link>
                </div>
            );
        } else {
            return (
                <div>
                </div>
            );
        }
    }
}
