import Account from './Account';
import LangSwitcher from './LangSwitcher';

export const App = () => {
  return (
    <div>
      <LangSwitcher/>
      <h2>User Account data</h2>
      <Account />
    </div>
  );
};

export default App;
