const insert =  document.getElementById('insert')
window.addEventListener('keydown',(e)=>{
    insert.innerHTML=`
    <div class="color">
    <table>
    <tr>
    <th> &nbsp;&nbsp; key &nbsp;&nbsp; </th>
    <th> &nbsp;&nbsp; keycode &nbsp;&nbsp; </th>
    <th> &nbsp;&nbsp; code &nbsp;&nbsp; </th>
    </tr>
    <tr>
    <td>${e.key ==="" ? space: e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
    </tr>
    </table>
    
    </div>`;
})