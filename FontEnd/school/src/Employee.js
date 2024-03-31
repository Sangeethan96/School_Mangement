import React, { useState, useEffect } from 'react';
import { variables } from './Variables';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Home from './Home';

function Employee() {
  const [employees, setEmployees] = useState([]);
  const [modalTitle, setModalTitle] = useState('');
  const [EID, setEID] = useState(0);
  const [EFName, setEFName] = useState('');
  const [ELName, setELName] = useState('');
  const [EAddress, setEAddress] = useState('');
  const [Subject, setSubject] = useState('');
  const [showModal, setShowModal] = useState(false);

  const refreshList = () => {
    fetch(variables.API_URL + 'Employee')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setEmployees(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    refreshList();
  }, []);

  const changeEFName = e => {
    setEFName(e.target.value);
  };

  const changeELName = e => {
    setELName(e.target.value);
  };

  const changeEAddress = e => {
    setEAddress(e.target.value);
  };

  const changeSubject = e => {
    setSubject(e.target.value);
  };

  const addClick = () => {
    setModalTitle('Add Employee');
    setEID(0);
    setEFName('');
    setELName('');
    setEAddress('');
    setSubject('');
  };

  const editClick = jb => {
    setModalTitle('Edit Employee');
    setEID(jb.EID);
    setEFName(jb.EFName);
    setELName(jb.ELName);
    setEAddress(jb.EAddress);
    setSubject(jb.Subject);
  };

  const createClick = () => {
    fetch(variables.API_URL + 'Employee', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        EFName: EFName,
        ELName: ELName,
        EAddress: EAddress,
        Subject: Subject
      })
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to create employee');
        }
        return res.json();
      })
      .then(result => {
        alert(result + " Data added successfully");
        setShowModal(false); // Close modal
        refreshList();
      })
      .catch(error => {
        alert('Failed to create employee: ' + error.message);
      });
  };

  const updateClick = () => {
    fetch(variables.API_URL + 'Employee', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        EID: EID,
        EFName: EFName,
        ELName: ELName,
        EAddress: EAddress,
        Subject: Subject
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
      fetch(variables.API_URL + 'Employee/' + id, {
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
        <Route path='/home' element={<Home />} />
      </Routes>

      <div>
        <button
          type="button"
          className="btn btn-primary m-2 float-end"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={addClick}
        >
          Add Employee
        </button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>EID</th>
              <th>EFName</th>
              <th>ELName</th>
              <th>EAddress</th>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(jb => (
              <tr key={jb.EID}>
                <td>{jb.EID}</td>
                <td>{jb.EFName}</td>
                <td>{jb.ELName}</td>
                <td>{jb.EAddress}</td>
                <td>{jb.Subject}</td>
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
                    onClick={() => deleteClick(jb.EID)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
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
                  <span className="input-group-text">First Name</span>
                  <input
                    type="text"
                    className="form-control"
                    value={EFName}
                    onChange={changeEFName}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">Last Name</span>
                  <input
                    type="text"
                    className="form-control"
                    value={ELName}
                    onChange={changeELName}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">Address</span>
                  <input
                    type="text"
                    className="form-control"
                    value={EAddress}
                    onChange={changeEAddress}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">Subject</span>
                  <input
                    type="text"
                    className="form-control"
                    value={Subject}
                    onChange={changeSubject}
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
                {EID === 0 ? (
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

export default Employee;
