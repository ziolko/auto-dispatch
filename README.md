This library exports a React component that automatically dispatches a Redux action
when rendered. You can use it to trigger data fetch instead of doing it imperatively 
in `componentDidMound`. 

# Example

```js
import { connect } from 'react-redux'
import AutoDispatch from 'auto-dispatch'

// Action creator
const fetchCardDetails = cardId => ({ type: 'FETCH_CARD_DETAILS', cardId })

// React component that automatically fetches required data
const Card = props => (
  <div>
    <AutoDispatch action={fetchCardDetails(props.cardId)} />
    {
      /* Card display logic */
    }
  </div>
)
```

# How it works

The action given as an argument is dispatched on initial render and every time 
it changes (deep comparison is performed). In the example above action `FETCH_CARD_DETAILS`
is dispatched every time `props.cardId` changes.

# License
https://opensource.org/licenses/MIT