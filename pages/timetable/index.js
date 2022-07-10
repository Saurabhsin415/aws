import React from 'react';
import Link from 'next/link';

const TimeTable = () => {
    return (
      <>
       <div className="text-center py-3 text-family1 result-update">
<h3 style={{'marginBottom':'0px'}}>TimeTable</h3>
 </div>
<div className='content-wrap1 p-0'>
<table>
  <tr>
    <th>Market</th>
    <th>Open</th>
    <th>Close</th>
  </tr>
  <tr>
    <td>SRIDEVI</td>
    <td>111</td>
    <td>112</td>

  </tr>
  <tr>
    <td>TIME BAZAR</td>
    <td>111</td>
    <td>112</td>

  </tr>
  <tr>
    <td>RAJDHANI DAY</td>
    <td>111</td>
    <td>112</td>

  </tr>
  <tr>
    <td>SRRAJDHANI DAYIDEVI</td>
    <td>111</td>
    <td>112</td>

  </tr>
</table>
</div> 
      </>
    )
}
export default TimeTable;