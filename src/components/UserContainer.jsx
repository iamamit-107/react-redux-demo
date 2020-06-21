import React, { useEffect } from "react";
import { fetchUser } from "../Redux/user/userActions";
import { connect } from "react-redux";

const UserContainer = ({ userData, fetchData }) => {
  console.log(userData);
  useEffect(() => {
    fetchData();
  }, []);
  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2> {userData.error} </h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData && userData.user.map((u) => <p key={u.id}> {u.name} </p>)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
