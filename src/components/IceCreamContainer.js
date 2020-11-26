import React from 'react'
import { connect } from 'react-redux'
import {buyIcecream} from '../redux'

 function Icecreamcontainer(props) {
    

    return (
        <>
            <h2>Number of Ice Creams - {props.numOfIcecreams}</h2>
            <button onClick={props.buyIcecream}>Buy Now</button>
        </>
    )
}


const mapStateToProps = state => {
    return {
        numOfIcecreams: state.icecream.numOfIcecreams
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        buyIcecream: () => dispatch(buyIcecream())
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Icecreamcontainer)