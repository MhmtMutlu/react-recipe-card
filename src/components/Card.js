import React from "react"
import "./Card.css";
import heartOutline from "../assets/heart-outline.png" 
import heartFill from "../assets/heart-fill.png"

function Card(props) {
    return (
        <div className="card">
            <div className="card-header">
                <div className="profile">
                    <span className="letter">{props.author[0]}</span>
                </div>
                <div className="card-title-group">
                    <h5 className="card-title">{props.title}</h5>
                    <div className="card-date">{props.date}</div>
                </div>
            </div>
            <img className="card-image w-100" src={props.image} alt="Logo" />
            <div className="card-text w-100">{props.description}</div>
            <div className="card-like-bar">
                {props.liked ? (
                    <img className="card-like-icon" src={heartFill} alt="Logo" />
                ) : (
                    <img className="card-like-icon" src={heartOutline} alt="Logo" />
                )}
                <div className="like-text">
                    <b>{props.likeCount}</b> kişi bu tarifi beğendi.
                </div>
            </div>
        </div>
    )
}

export default Card