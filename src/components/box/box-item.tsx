import React from 'react'
import { Link } from 'react-router-dom'

export interface IBoxItem {
    src: string;
    text: string;
    label: string;
    path: string;
}

export const BoxItem: React.FC<IBoxItem> = (props) => {
    return (
        <li className="cards__item">
            <Link to={props.path} className="cards__item__link">
                <figure className="cards__item__pic-wrap" data-category={props.label}>
                    <img src={props.src}
                        alt="Travel"
                        className="cards__item__img" />
                </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__text">
                        {props.text}
                    </h5>
                </div>
            </Link>
        </li>
    )
}
