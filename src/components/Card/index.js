import React from 'react';

const Card = props => (
    <div className="card mb-4">
        <img className="card-img-top" src={props.image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.summary}</p>
                <a href="#" className="btn btn-primary">View Project</a>
            </div>
    </div>
) 


export default Card;