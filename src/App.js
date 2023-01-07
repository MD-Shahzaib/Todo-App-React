// _____________________________ todo for title _______________________________.

import './App.css'
import { useState } from 'react'

function App() {

  // make state variables.
  const [list, setList] = useState([])
  const [title, setTitle] = useState('')
  const [changeBtn, setChangeBtn] = useState(true)
  const [indexing, setIndexing] = useState("")

  // function for onChangeInput.
  const onChangeInput = (e) => {
    setTitle(e.target.value);
    console.log('onChangeInput function call')
  };

  // function for addItem.
  const addItem = () => {
    if (title !== '') {
      const copyList = [...list];
      copyList.push(title);
      setList(copyList);
      // remove the value from input.
      setTitle('');
      console.log('addItem function call')
    } else {
      alert('Please write some todo');
    }
  };

  // function for deleteItem.
  const deleteItem = (index) => {
    const copyList = [...list]
    copyList.splice(index, 1)
    setList(copyList)
    console.log('deleteItem function call')
  };

  // function for editItem.
  const editItem = (index) => {
    const copyList = [...list]
    const edit = copyList[index]
    setTitle(edit)
    setIndexing(index)
    setChangeBtn(false)
    console.log('index --->', index)
    console.log('editItem function call')
  };

  // function for updateItem.
  const updateItem = () => {
    const copyList = [...list]
    copyList[indexing] = title
    setList(copyList)
    setChangeBtn(true)
    // remove the value from input.
    setTitle('');
    console.log('copyList --->', copyList)
    console.log('updateItem function call')
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">TODO-APP</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      {/* Main-Code */}
      <div className="container bg-dark text-light py-2 px-2 my-3">
        <h1 className="my-2 mx-2 border-bottom">TODO-APP</h1>
        <div className="my-2 mx-2">
          <input type="text" className="form-control bg-dark text-light" id="title" placeholder="Enter Todo Title" value={title} onChange={onChangeInput} />
        </div>
        <button className="btn btn-primary my-1 mx-2" onClick={changeBtn ? addItem : updateItem}>{changeBtn ? "ADD" : "UPDATE"}</button>
        <div className="overflow-auto">
          <table className="table table-sm table-dark table-hover table-bordered border-light my-1 mx-2">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Title</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item, index) => {
                return <tr scope="row" key={item.toString()}>
                  <th>{index + 1}</th>
                  <th>{item}</th>
                  <th className="d-flex align-items-center">
                    <button onClick={() => deleteItem(index)} className="btn btn-danger mx-1">DELETE</button>
                    <button onClick={() => editItem(index)} className="btn btn-primary mx-1">EDIT</button>
                  </th>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
// _____________________________ todo for title _______________________________.










// ____________________ Todo for both title & description _____________________.
/*
import './App.css'
import { useState } from 'react'

function App() {

  // make state variables
  const [title, setTitle] = useState('')
  const [list, setList] = useState([])
  const [desc, setDesc] = useState('')
  const [list2, setList2] = useState([])
  const [changeBtn, setChangeBtn] = useState(true)
  const [indexing, setIndexing] = useState("")

  // function for addItem.
  const addItem = () => {
    if (title !== '' && desc !== '') {
      const copyList = [...list];
      const copyList2 = [...list2];
      copyList.push(title);
      copyList2.push(desc);
      setList(copyList);
      setList2(copyList2);
      // remove the value from input.
      setTitle('');
      setDesc('');
      console.log('addItem function call')
      console.log(title, ' = title')
      console.log(desc, ' = desc')
    } else {
      alert('Please write some todo');
    }
  };

  // function for onChangeTitle.
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    console.log('onChangeTitle function call')
  };

  // function for onChangeDesc.
  const onChangeDesc = (e) => {
    setDesc(e.target.value);
    console.log('onChangeDesc function call')
  };

  // function for deleteItem.
  const deleteItem = (index) => {
    const copyList = [...list]
    copyList.splice(index, 1)
    setList(copyList)
    console.log('deleteItem function call')
  };

  // function for editItem.
  const editItem = (index) => {
    const copyList = [...list]
    const edit = copyList[index]
    setTitle(edit)
    setIndexing(index)
    console.log('index --->', index)
    setChangeBtn(false)
    console.log('editItem function call')
  };

  // function for updateItem.
  const updateItem = () => {
    const copyList = [...list]
    copyList[indexing] = title
    setList(copyList)
    console.log('copyList --->', copyList)
    setChangeBtn(true)
    // remove the value from input.
    setTitle('');
    console.log('updateItem function call')
  };


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">TODO-APP</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container bg-dark text-light py-2 px-2 my-3">
        <h1 className="my-2 mx-2 border-bottom">TODO-APP</h1>
        <div className="my-2 mx-2">
          <input type="text" className="form-control bg-dark text-light" id="title" placeholder="Enter Todo Title" value={title} onChange={onChangeTitle} />
        </div>
        <div className="my-1 mx-2" >
          <textarea className="form-control bg-dark text-light" placeholder="Enter Todo Description" rows="5" value={desc} onChange={onChangeDesc} ></textarea>
        </div>
        <button className="btn btn-primary my-1 mx-2" onClick={changeBtn ? addItem : updateItem}>{changeBtn ? "ADD" : "UPDATE"}</button>
        <div className="table-responsive">
          <table className="table table-sm table-dark table-hover table-bordered align-top my-1 mx-2">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Title</th>
                <th scope="col">Discription</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {list.map((title, index) => {
                return <tr scope="row" key={title.toString()}>
                  <th>{index + 1}</th>
                  <th>{title}</th>
                  <th>{`{list.map = title} , {list2.map = desc} , (desc ko show karne k liye list2.map karna hoga) As-it-is (title ko show karne k liye list.map karna hoga) . issue in map`}</th>
                  <th className="d-flex align-items-center">
                    <button onClick={() => deleteItem(index)} className="btn btn-danger mx-1">DELETE</button>
                    <button onClick={() => editItem(index)} className="btn btn-primary mx-1">EDIT</button>
                  </th>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
*/
// ____________________ Todo for both title & description _____________________.














// _____________________________ D-Code _________________________________.
/*
import './App.css';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([1, 2, 3])
  const [input, setinput] = useState("")
  const [change, setChange] = useState(true)
  const [indexing, setIndexing] = useState("")

  const addItem = function () {
    if (input === "") {
      alert("Write Something")
    } else {
      const tempList = [...list]
      tempList.push(input)
      setList(tempList)
      setinput("")
    }
  }

  //input value to update the setInput
  const onInputChange = function (e) {
    setinput(e.target.value)
  }

  //delete the item
  const deleteItem = function (index) {
    const tempList = [...list]
    tempList.splice(index, 1)
    setList(tempList)
  }

  //edit the Item
  const editItem = function (index) {
    //show update button
    setChange(false)
    setIndexing(index)
    setinput(list[index])
  }

  // update the Item
  const UpdateItem = function () {
    const tempList = [...list]
    tempList[indexing] = input
    setList(tempList)
    setChange(true)
    setinput("")
  }

  return (
    <>
      <h3>TODO APP</h3>
      <input value={input} type="text" placeholder='Enter Item ' onChange={onInputChange} />
      <button onClick={change ? addItem : UpdateItem}>{change ? "Add item" : "Update"}</button>
      <ul>
        {list.map((item, index) => {
          return <li key={item.toString()}>
            {item}
            <button onClick={() => deleteItem(index)}>Delete</button>
            <button onClick={() => editItem(index)}>Edit</button>
          </li>
        })}
      </ul>
    </>
  );
}
export default App;
*/
// ______________________________ D-Code ________________________________.