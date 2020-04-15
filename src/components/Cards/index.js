import React from 'react';
import './styles.css'
import noImage from '../../assets/no-image.png'

const Cards = ({ books }) => {
    const book = books.map(b => { return b.volumeInfo })
    return (
        <div className="cards-container">
            <div className="cards">
                {
                    book.map(b => (
                        <div className="card">
                            <div className="card-title">
                                <h2><a href={b.previewLink} target="_blank">{b.title}</a></h2>
                            </div>

                            <div className="container-card-info">
                                <div className="card-image">
                                    <img src={b.imageLinks && b.imageLinks ? b.imageLinks.thumbnail : noImage} alt="Card image cap" />
                                </div>
                                <div className="card-description">
                                    <div className="card-field">
                                        <strong>Author: </strong>
                                        {b.authors}
                                    </div>
                                    <div className="card-field">
                                        <strong>Publisher: </strong>
                                        {b.publisher}
                                    </div>
                                    <div className="card-field">
                                        <strong>Published: </strong>
                                        {b.publishedDate}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Cards;