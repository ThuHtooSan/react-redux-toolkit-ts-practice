import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { order, restock } from './icecreamSlice';

const IcecreamView = () => {
  const numOfIcecream = useAppSelector(state => state.icecream.numOfIcecream);
  const dispatch = useAppDispatch();

  return (
    <>
      <h2>Number of Icecreams - {numOfIcecream}</h2>
      <button onClick={() => dispatch(order())}>Order Icecream</button>
      <button onClick={() => dispatch(restock(5))}>Restock Icecream</button>
    </>
  );
};

export default IcecreamView;
