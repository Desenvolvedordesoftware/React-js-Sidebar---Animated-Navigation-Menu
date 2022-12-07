import React from "react";
import './Dashboard.css';
import {TocRounded, DashboardRounded} from '@material-ui/icons'
import Item from "../../components/Item";

function Dashboard() {
    return (
      <div className="Dashboard">
       <div className="sidebar_container">
        <div className="sidebar">
         <div className="lines_icon">
          <TocRounded/>
         </div>
         <div className="profile">
          <img src="https://www.4bus.com.br/static/media/logo.73d83e47.png" alt='profile_img' />
         </div>
         <div className="groups">
          <div className="group">
           <h3>Página inicial</h3>
           <Item icon={<DashboardRounded/>}
           name='Dashboard' />
          </div>
         </div>
        </div>
      </div>
       <div className="body_container">
        Body
       </div>
      </div>
    );
  }
  
export default Dashboard;