import { connect } from 'react-redux'
import GifContainer from '../GifContainer'


const mapStateToProps = (state) => {
  var view = (state.currentView === 'ALL') ? state.searchPics : state.collection
  return {
    displayPics: view
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onClick: (imgUrl) => {
//       dispatch(toggleCollection(imgUrl))
//     }
//   }
// }

const VisiblePics = connect(
  mapStateToProps,
  )(GifContainer) 

export default VisiblePics 
