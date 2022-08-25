import React from 'react';

const User = (props) => {
    console.log("props", props);
    return (
        <>
            <div>
                
                <h1>Home</h1>
                <div className="container">
                    <div className='cart-wrapper'>
                        <div className='img-wrapper item'>
                            <img src="https://media.croma.com/image/upload/v1631776565/Croma%20Assets/Communication/Mobiles/Images/243463_7_zzy5gw.png" alt="item" className='product-item' />
                        </div>
                        <div className='text-wrapper item'>
                            <span className='text-wrapper'>
                                I-Phone
                            </span><br />
                            <span className='text-wrapper'>
                                Price: $1000
                            </span>
                        </div>
                        <div className='btn-wrapper item'>
                            <button onClick={()=>props.addToCartHandler({price:1000, name:'I-Phone'})}>Add to cart</button>
                            <button onClick={()=>props.removeToCartHandler()}>Remove to cart</button>
                        </div>
                    </div>
                    <div className='cart-wrapper'>
                        <div className='img-wrapper item'>
                            <img src="https://i.gadgets360cdn.com/products/wearables/large/1551968932_832_apple_watch-series-4-gps-cellular-smartwatch.jpg?downsize=*:360" alt="item" className='product-item' />
                        </div>
                        <div className='text-wrapper item'>
                            <span className='text-wrapper'>
                                Apple Watch
                            </span><br />
                            <span className='text-wrapper'>
                                Price: $500
                            </span>
                        </div>
                        <div className='btn-wrapper item'>
                            <button onClick={()=>props.addToCartHandler({price:500, name:'Apple Watch'})}>Add to cart</button>
                            <button onClick={()=>props.removeToCartHandler()}>Remove to cart</button>
                        </div>
                    </div>
                </div>


            </div>
        </>

    )
}

export default User