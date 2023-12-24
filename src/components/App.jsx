import { useSelector } from 'react-redux';
import Account from './Account';
import LangSwitcher from './LangSwitcher';

export const App = () => {
const lang = useSelector(state => state.locale.lang)

  return (
    <div>
      <LangSwitcher/>
      <h2>User Account data</h2>
      <Account />
      <p>Lang: {lang}</p>
    </div>
  );
};

export default App;
