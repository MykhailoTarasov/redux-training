import { useDispatch, useSelector } from 'react-redux';
import {deposit, withdraw} from '../redux/store';

const Account = () => {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.account.balance);

  return (
    <div>
      <p>
        <b>{balance}$</b>
      </p>
      <button onClick={() => dispatch(deposit(10))}>Deposit</button>
      <button onClick={() => dispatch(withdraw(5))}>Withdraw</button>
    </div>
  );
};

export default Account;
