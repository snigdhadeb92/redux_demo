import React from 'react';

const Header = (props) => {
    console.log("props", props.cardData);
    return (
        <>
            <div>
                <div className="addtocart">
                    <span>{props.cardData.length}</span>
                    <img src="https://image.shutterstock.com/image-vector/shopping-cart-vector-icon-flat-260nw-1690453492.jpg" alt="" />
                </div>
                
            </div>
        </>

    )
}

export default Header