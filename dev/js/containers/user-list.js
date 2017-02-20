import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectUser} from '../action/index';

//STEP1 COMPONENT Creation:
class UserList extends React.Component{
    render()
    {
        return(
            <ul>
              {this.createListItem()}
            </ul>
        );
    }

    createListItem(){
          return this.props.users.map((user) => {
            return (
                <li
                    key={user.id}
                    onClick={() => this.props.selectUser(user)}
                >
                    {user.first} {user.last}
                </li>
            );
        });
    }
 }

 
// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser}, dispatch);
}

//STEP2 'mapStateToProps' returns an object which maps state object 
//in store to component's property'. 
//NOTE: Name of the function can be anything.
function mapStateToProps(state){
    return{
        users: state.users
    };
}


//STEP3: Glues the store properties to the Component.
export default connect(mapStateToProps,matchDispatchToProps)(UserList);