import { useEffect, useState } from "react";

function getUserInfo(){

    const [userInfo, setUserInfo] = useState();
    const [status, setStatus] = useState('loading');
  
    function getUserInfo(){
      if(status === 'loading'){
        return;
      }
      fetch('/api/users?id='+session.user.id)
      .then(response => {
        response.json().then(json => {
          setUserInfo(json.user);
          setUserInfoStatus(true);
        })
      })
}

    useEffect(() => {
        getUserInfo();
    }, [status]);

    return {userInfo, userInfoStatus};
}