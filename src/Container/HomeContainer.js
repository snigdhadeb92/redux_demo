import {connect} from 'react-redux';
import User from '../Component/User';
import {addToCart,removeToCart} from '../Serivice/Actions/action';

const mapStateToProps= state=>({
    cardData: state.cardItem
})

const mapDispatchToProps = dispatch=>({
    addToCartHandler: data=>dispatch(addToCart(data)),
    removeToCartHandler: data=>dispatch(removeToCart(data))

})

export default connect(mapStateToProps,mapDispatchToProps)(User)

//export default User;