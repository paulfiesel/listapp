import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'

import './App.css';

function App() {

  // Items (List) State
  const [list, setList] = useState([
    { "id": 1, "title": "Item 1", "status": false },
    { "id": 2, "title": "Item 2", "status": false }
  ]);

  // Temp State
  const [newItem, setNewItem] = useState('');
  const [updateData, setUpdateData] = useState('');

  // Add Item
  ///////////////////////////////
  const addItem = () => {
    if (newItem) {
      let num = list.length + 1;
      let newEntry = { id: num, title: newItem, status: false }
      setList([...list, newEntry])
      setNewItem('');
    }
  }

  // Delete Item
  ///////////////////////////////
  const deleteItem = (id) => {
    let newItems = list.filter(item => item.id !== id)
    setList(newItems);
  }



  return (
    <div className="container App">

      <br /><br />
      <h2> List App (RH Assignment)</h2>
      <br /><br />

      {/*Add Item*/}
      <div className="row">
        <div className="col">
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            className="form-control form-control-lg" />
        </div>
        <div className="col-auto">
          <button
            onClick={addItem}
            className="btn btn-lg btn-success">Add Item</button>
        </div>
      </div>
      <br />

      {/*Display List*/}

      {list && list.length ? '' : 'No Items...'}

      {list && list
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map((item, index) => {
          return (
            <React.Fragment key={item.id}>

              <div className="col itemBg">
                <div className={item.status ? 'done' : ''}>
                  <span className="itemNumber">{index + 1}</span>
                  <span className="itemText">{item.title}</span>
                </div>
                <div className="iconsWrap">
                  <span title="Delete"
                    onClick={() => deleteItem(item.id)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </div>
              </div>

            </React.Fragment>
          )
        })
      }

    </div >
  );
}

export default App;
