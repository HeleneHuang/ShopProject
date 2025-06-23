import React from 'react'
import "./List.scss"
import Card from "../Card/Card"

const List = () => {
    const data = [
        {
            id: 1,
            img: "/assets/img/01.webp",
            title: "dress",
            isNew: true,
            oldPrice: 16,
            price: 12
        },
        {
            id: 2,
            img: "/assets/img/02.webp",
            title: "hat",
            isNew: false,
            oldPrice: 26,
            price: 18
        },
        {
            id: 3,
            img: "/assets/img/03.webp",
            title: "coat",
            isNew: true,
            oldPrice: 54,
            price: 33
        },
        {
            id: 4,
            img: "/assets/img/04.webp",
            title: "jeans",
            isNew: false,
            oldPrice: 26,
            price: 20
        },
    ];
    return (
        <div className='list'>
            {data.map(item => (
                <Card item={item} key={item.id} />
            ))}
        </div>
    )
}

export default List