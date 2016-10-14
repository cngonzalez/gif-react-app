import { connect } from 'react-redux'
import CollectionToggle from '../CollectionToggle'
import { toggleCollection } from '../../actions/actions'

const mapStateToProps = (state, ownProps) => { 
  if (inCollection(state, ownProps))  {
    return {
      message: 'Remove from my collection',
      collected: true
    }
  }
  else {return {
    message: 'Add to my collection',
    collected: false}
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onClick: (url, collected) => dispatch(toggleCollection(url, collected))
    }
}

function inCollection(state, props) {
 return !(typeof (state.collection.find((url) => url === props.url)) === 'undefined')
}

const ToggleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionToggle)

export default ToggleContainer
