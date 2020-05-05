import React  from 'react';
import SHOP_DATA from "./show.data";
//components
import CollectionPreview from '../../components/collection/collectionPreview.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    }
  }

  render(){
    const { collections } = this.state;
    return (
      <div>
        {
          collections.map(({id, ...otherItemProps}) =><CollectionPreview key={id} {...otherItemProps}/>)
        }
      </div>

    )
  }
}

export default ShopPage;