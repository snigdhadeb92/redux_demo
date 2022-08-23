import React from 'react';

const User = () => {
    return (
        <>
           <div>
            <div className="addtocart">
                <img src="https://image.shutterstock.com/image-vector/shopping-cart-vector-icon-flat-260nw-1690453492.jpg" alt="" />
            </div>
            <h1>Home</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src="https://media.croma.com/image/upload/v1631776565/Croma%20Assets/Communication/Mobiles/Images/243463_7_zzy5gw.png" alt="item" className='product-item'/>
                </div>
                <div className='text-wrapper item'>
                    <span className='text-wrapper'>
                        I-Phone
                    </span><br/>
                    <span className='text-wrapper'>
                        Price: $1000
                    </span>
                </div>
                <div className='btn-wrapper item'>
                    <button>Add to cart</button>
                </div>
            </div>
           </div>
        </>

    )
}

export default User