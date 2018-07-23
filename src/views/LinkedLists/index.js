import React, {Fragment} from 'react';
import PropTypes from 'prop-types'

const LinkedLists = (props) =>
  <Fragment>
    <div className="App-intro">
      <p>Current Item at Head {props.head.value}</p>
      {props.head.next && <p>Next Item {props.head.next.value}</p>}

      <hr />

      {props.broList.map((bro)=><p>{bro}</p>)}

      <hr />


      <button onClick={props.onClick}>Add a brother</button>
    </div>

  </Fragment>

LinkedLists.propTypes = {
  head: PropTypes.object.isRequired,
  onClick:PropTypes.func,
  count:PropTypes.number
}

export default LinkedLists