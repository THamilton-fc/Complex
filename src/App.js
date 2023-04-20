import { React, useState} from 'react';

import Header from './components/Header';
import Home from './pages/Home';

function App() {
  const [buyItems, addBuyItem] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className='flex'>
      <div>
        <Header buyItems={buyItems} addBuyItem={addBuyItem} setModalVisible={setModalVisible} />
        <Home buyItems={buyItems} addBuyItem={addBuyItem} modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </div>
    </div>
  );
}

export default App;
