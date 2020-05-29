import React from 'react';
import logo from './picture/logo.PNG';
import './App.css';


var user_list = []

user_list.push({nama: "Rudi Berjaya Subroto", username: "rudibs17", email: "rudisubroto@gmail.com", admin: "no", status: "aktif"})
user_list.push({nama: "Rudi Berjaya Subroto", username: "rudibs17", email: "rudisubroto@gmail.com", admin: "yes", status: "tidak aktif"})

export class View extends React.Component{

}

function Header() {
  return (
    <div className="Header">
      <header className="App-header">
      </header> 
    </div>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="vl"></div>
      <img src={logo}></img>
      <br/>
      <hr/>
      <br/>
      <nav>
        <li>Org Management</li>
        <li>User Management</li>
        <li>Event</li>
        <li>Corporate Contact</li>
        <li>My Contact</li>
      </nav> 
    </div>    
  )
}


function Container() {
  return (
    <div className="konten container-sm">
      <br></br><br></br>
      <div className="tabel card rounded">
        <div className="card-body">
        <p className="head panel-body">User List</p>
        <input type="text" className="search form-control col-sm-2" placeholder="Search user here">
        </input>
        <a href="add.html" className="tambah btn">Add User</a>
        <br/>
        <table className="table">
          <thead>
            <tr>
                <th scope="col">Nama</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Admin</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
            </tr>
          </thead>
          {user_list.map(user => 
            {
            return(
          <tbody>
            <tr>
            <td>{user.nama}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            {
              (user.admin === "yes")
              ? <td><font color="green">{user.admin}</font></td>
              : <td><font color="red">{user.admin}</font></td>
            }
            {
              (user.status === "aktif")
              ? <td><font color="green">{user.status}</font></td>
              : <td><font color="red">{user.status}</font></td>
            }
            <td><button className="edit btn">Edit</button></td>
            </tr>
          </tbody>
            )
            }
            )}

            
        </table>
        </div>
      </div>
    </div>
  )
}

export {
  Sidebar, Container 
}

export default Header;