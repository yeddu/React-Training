import React, { useState } from "react";
import {Link} from 'react-router-dom'

function NameList() {
  const names = ['Bruce', 'Clark', 'Diana'];
  return (
    <div>
      {
        names.map(name => <h2>{name}</h2>)
      }
      <ul>
        <li><Link to="details">Details</Link></li>
      </ul>
    </div>
  )

}
export default NameList;

