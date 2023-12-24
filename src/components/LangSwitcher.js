import { useDispatch, useSelector } from 'react-redux';
import { changeLang } from '../redux/store';

const LangSwitcher = () => {
  const dispatch = useDispatch();
  const lang = useSelector(state => state.locale.lang);

  const handleChangeLang = e => dispatch(changeLang(e.target.value));

  return (
    <div>
      <h3>LangSwitcher</h3>
      <select value={lang} onChange={handleChangeLang}>
        <option value="uk">UK</option>
        <option value="pl">PL</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
};

export default LangSwitcher;
