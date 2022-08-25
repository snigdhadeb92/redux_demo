import {connect} from 'react-redux';
import Header from '../Component/Header';


const mapStateToProps= state=>({
    cardData: state.cardItem
})

const mapDispatchToProps = dispatch=>({
    
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)

//export default User;