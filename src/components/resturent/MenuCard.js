import React from 'react'
import "./style.css";
const MenuCard = ({ menuData }) => {
    // console.log(menuData);
        
    return (
        <>
            <div className="main-card--cointainer">
                {
                    menuData.map((currentElmnt) => {
                        const{id,category,name,description,image}= currentElmnt;
                        return (
                            <>
                                <div className="card-container" key={id}>
                                    <div className="card">
                                        <div className="caed-body">
                                            <span className="card-nember card-circle subtle">{id}</span>
                                            <span className="card-author subtle">{category}</span>
                                            <h2 className="card-title">{name}</h2>
                                            <span className="card-description subtle">{description}</span>
                                            <div className="card-read">Read</div>
                                            <img src={image} alt="" className='card-media' />
                                            <span className="card-tag subtle">Order Now</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </div>
        </>
    )
}

export default MenuCard
