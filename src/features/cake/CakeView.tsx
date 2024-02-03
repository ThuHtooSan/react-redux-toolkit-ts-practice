import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { order, restock } from './cakeSlice';

const CakeView = () => {
  const numOfCakes = useAppSelector(state => state.cake.numOfCakes);
  const dispatch = useAppDispatch();

  return (
    <>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(order())}>Order Cake</button>
      <button onClick={() => dispatch(restock(5))}>Restock Cake</button>
    </>
  );
};

export default CakeView;
