import './Nav.css'

function Nav(){
    return (  
         <div className="x">
        <ul className="nav justify-content-center">
       <li className="nav-item">
         <a className="nav-link"  href="/create">Create Table!</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="/insert">Insert a Record</a>
       </li>
     
       <li className="nav-item">
         <a className="nav-link" href="/fetch">Get a Record</a>
       </li>
     
     
       <li className="nav-item">
         <a className="nav-link" href="/update_f">Update First Name</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="/update_l">Update Last Name</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="/delete_record">Delete a Record</a>
       </li>
     
       <li className="nav-item">
         <a className="nav-link" href="delete_table">Delete table</a>
       </li>
     
     </ul>
         </div>);
}

export default Nav;