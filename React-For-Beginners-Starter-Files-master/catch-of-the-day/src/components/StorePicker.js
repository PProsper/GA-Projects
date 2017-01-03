import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
/*  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  }*/ //would require a bind property for each store id

  goToStore(event) {
    event.preventDefault();
    console.log(' You Changed the URL');
    //first grab the from the box
    const storeId = this.storeInput.value;
    console.log( `Going to  ${storeId}`)
    //second we're going to transition from /to /store/:storeId
    this.context.router.transitionTo( `/store/${storeId}`);
  }

  render ( ) {
     //Comments should be placed above return or within return element
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)} >
        <h2> Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={
          getFunName()} ref={(input) => { this.storeInput = input}} />
        <button type="submit">Visit Store </button>
      </form>
      )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;


