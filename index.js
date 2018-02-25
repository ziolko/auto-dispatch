import React from 'react'
import PropTypes from 'prop-types'
import equal from 'fast-deep-equal'

class AutoDispatch extends React.Component {
  componentDidMount () {
    this.callActionIfPropsDidChange(undefined)
  }

  componentDidUpdate (prevProps) {
    this.callActionIfPropsDidChange(prevProps)
  }

  render () {
    return null
  }

  callActionIfPropsDidChange (prevProps) {
    if (this.props.action === undefined) {
      return
    }

    if (prevProps && equal(this.props.action, prevProps.action)) {
      return
    }

    this.context.store.dispatch(this.props.action)
  }
}

AutoDispatch.propTypes = {
  action: PropTypes.object.isRequired
}

AutoDispatch.contextTypes = {
  store: PropTypes.object.isRequired
}

export default AutoDispatch
