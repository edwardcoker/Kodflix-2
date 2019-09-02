import React from "react";
import { Link, Redirect } from "react-router-dom";
import getGallery from "../gallery-get";
import './Details.css';

export default class Details extends React.Component {
    constructor() {
        super();
        this.state = {
            gallery: {}
        };
    }

    componentDidMount() {
        let galleryId = this.props.match.params.galleryId;
        let gallery = getGallery().find(gallery => gallery.id === galleryId);
        this.setState({ gallery });
    }

    render() {
        if (this.state.gallery === undefined) {
            return <Redirect to="/not-found" />;
        } else {
            return (
                <div className='Details'>
                    <h1>{this.state.gallery.name}</h1>
                    <div className='content'>
                        <div className='text'>{this.state.gallery.details}</div>
                        <img className='image' src={this.state.gallery.cover} alt={this.state.gallery.name} />
                    </div>
                    <Link to="/">Back to Home Page</Link>
                </div>
            );
        }
    }
}
