import React from 'react';
import UserList from '../containers/user-list';
//Main Layout
// var App1 = React.createClass({
// render: function()
// {
//     return(
//         <div>
//             <h2> User Name List </h2>
//             <hr />
//             <h2> User details </h2>
//        </div>
//     );
// }
// });

//Main Layout
class MainApp extends React.Component {
    render()
    {
        return(
             <div>
                <h2> User Name List </h2>
                <UserList />
                <hr />
                <h2> User details </h2>
             </div>
        );
    }
}


 

export default MainApp;