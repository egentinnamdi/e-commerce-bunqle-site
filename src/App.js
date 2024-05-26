
import './App.css';
import ElementProductDetail from "./08_Product_Detail/ElementProductDetail"
import { ElementHomepage } from './Main_Homepage/Main_pageWindget';
import { Dropdown } from './Dropdown/Dropdown';
import { MultiCat } from './MultiCat/MultiCat';
import { Hamburg } from './Hamburg/Hamburg';

function App() {
  return (
    <div>
      {/* <ElementProductDetail /> */}
      {/* <ElementHomepage/> */}
      <MultiCat />
      {/* <ElementHomepage/> */}
      <Hamburg />
      {/* <Dropdown /> */}
    </div >
  );
}

export default App;
