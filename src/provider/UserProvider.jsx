import React, { useEffect, useState } from "react";
import { UserContext } from "../Context";
import axios from "axios";
import Loding from "../Loding";

function UserProvider({ children }) {
  const [user, setUser] = useState();
  const [lodingUser, setLoadingUser] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get("https://myeasykart.codeyogi.io/me", {
          headers: {
            Authorization: token,
          },
        })
        .then((respones) => {
          setUser(respones.data);
          setLoadingUser(false);
        })
        .catch(() => {
          localStorage.removeItem("token");
          setLoadingUser(false);
        });
    } else {
      setLoadingUser(false);
    }
  }, []);

  if (lodingUser) {
    return <Loding />;
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
