import { connect } from 'react-redux'
import GifContainer from '../GifContainer'

const getVisiblePics = (pics) => {
  // add filter later, get basic functionality working first.
 return pics
}

const mapStateToProps = (state) => {
  return {
    displayPics: getVisiblePics(state.displayPics)
  }
}

const VisiblePics = connect(mapStateToProps)(GifContainer) 

export default VisiblePics 
