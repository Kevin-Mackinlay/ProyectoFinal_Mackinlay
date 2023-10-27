import {AiOutlineShoppingCart} from 'react-icons/ai'
import Badge from 'react-bootstrap/Badge'

const CartWidget = () => {
  return (
    <div>
      <AiOutlineShoppingCart fontSize={'1.5rem'}/>
      <Badge bg="danger">5</Badge>
    </div>
  );
};

export default CartWidget;
