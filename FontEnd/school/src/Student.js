import React, { useState, useEffect } from 'react';
import { variables } from './Variables';
import {BrowserRouter, Route, Routes,NavLink} from 'react-router-dom';
import Home from './Home';
function Student() {
  const [Students, setStudents] = useState([]);
  const [modalTitle, setModalTitle] = useState('');
  const [SID, setSID] = useState(0);
  const [SName, setSName] = useState('');
  const [SLName, setSLName] = useState('');
  const [Grade, setGrade] = useState('');
  const [SAddress, setSAddress] = useState('');
  const [ContactNumber, setContactNumber] = useState('');
  const [showModal, setShowModal] = useState(false);
  //const apiUrl = " https://localhost:44375/api/Student";

  const refreshList = () => {
    fetch(variables.API_URL +'Student')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setStudents(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    refreshList();
  }, []);

  const changeSName = e => {
    setSName(e.target.value);
  };

  const changeSLName = e => {
    setSLName(e.target.value);
  };

  
  const changeGrade = e => {
    setGrade(e.target.value);
  };

  const changeSAddress = e => {
    setSAddress(e.target.value);
  };

  const changeContactNumber = e => {
    setContactNumber(e.target.value);
  };

  const addClick = () => {
    setModalTitle('Add Student');
    setSID(0);
    setSName('');
    setSLName('');
    setGrade('');
    setSAddress('');
    setContactNumber('');
  };

  const editClick = (jb)=> {
    setModalTitle('Edit Student');
    setSID(jb.SID);
    setSName(jb.SName);
    setSLName(jb.SLName);
    setGrade(jb.Grade);
    setSAddress(jb.SAddress);
    setContactNumber(jb.ContactNumber);
  };

  const createClick = () => {
    fetch(variables.API_URL + 'Student', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        SName: SName,
        SLName: SLName,
        Grade: Grade,
        SAddress:SAddress,
        ContactNumber:ContactNumber
      })
    })
    .then(res => {
        if (!res.ok) {
          throw new Error('Failed to create student');
        }
        return res.json();
      })
      .then(result => {
        alert(result+"Data added Succusfully");
        setShowModal(false); // Close modal
        refreshList();
      })
      .catch(error => {
        alert('Failed to create student: ' + error.message);
      });
  };
// Make sure here All neccesorry Put method area available eg(SID,SName)
  const updateClick = () => {
    fetch(variables.API_URL + 'Student', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        SID:SID,
        SName: SName,
        SLName: SLName,
        Grade: Grade,
        SAddress:SAddress,
        ContactNumber:ContactNumber
      })
    })
      .then(res => res.json())
      .then(result => {
        alert(result);
        refreshList();
      })
      .catch(error => {
        alert('Failed');
      });
  };

  const deleteClick = id => {
    if (window.confirm('Are you sure?')) {
      fetch(variables.API_URL + 'Student/' + id, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(result => {
          alert(result);
          refreshList();
        })
        .catch(error => {
          alert('Failed');
        });
    }
  };

  return (
    <div>
        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/home">
              Back to Home Page
            </NavLink>
          </li>
                     
        </ul>
      </nav>

      <Routes>
       
        <Route path='/home' element={<Home/>}/>
        </Routes>
            <div>
      <button
        type="button"
        className="btn btn-primary m-2 float-end"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={addClick}
      >
        Add Student
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>SID</th>
            <th>SName</th>
            <th>SLName</th>
            <th>Grade</th>
            <th>SAddress</th>
            <th>ContactNumber</th>
          </tr>
        </thead>
        <tbody>
          {Students.map(jb => (
            <tr key={jb.SID}>
              <td>{jb.SID}</td>
              <td>{jb.SName}</td>
              <td>{jb.SLName}</td>
              <td>{jb.Grade}</td>
              <td>{jb.SAddress}</td>
              <td>{jb.ContactNumber}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-light mr-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => editClick(jb)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => deleteClick(jb.SID)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        //className="modal fade"
        className={`modal fade ${showModal ? 'show' : ''}`}
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{modalTitle}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              
              <div className="input-group mb-3">
                <span className="input-group-text">Student Name</span>
                <input
                  type="text"
                  className="form-control"
                  value={SName}
                  onChange={changeSName}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">SLName</span>
                <input
                  type="text"
                  className="form-control"
                  value={SLName}
                  onChange={changeSLName}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Grade</span>
                <input
                  type="text"
                  className="form-control"
                  value={Grade}
                  onChange={changeGrade}
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">SAddress</span>
                <input
                  type="text"
                  className="form-control"
                  value={SAddress}
                  onChange={changeSAddress}
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">ContactNumber</span>
                <input
                  type="text"
                  className="form-control"
                  value={ContactNumber}
                  onChange={changeContactNumber}
                />
              </div>

            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {SID === 0 ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={createClick}
                >
                  Create
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={updateClick}
                >
                  Update
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );

}

export default Student;