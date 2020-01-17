import React,{Component} from 'react';

import './leftBar.css'

class LeftBar extends Component{
    render() {
        return(
          <div className="leftBar">
              <ul>
                  <li>Achat</li>
                  <li>Ordres</li>
                  <li>Solde</li>
                  <li>Bot de la semaine</li>
              </ul>
          </div>


        )
    }
}

export default LeftBar;