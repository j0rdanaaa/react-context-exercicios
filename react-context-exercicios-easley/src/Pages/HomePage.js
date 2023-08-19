import { useContext } from "react";
import Card from "../components/Card";
import { GlobalContext } from "../contexts/GlobalContext";

const HomePage = () => {
  const context = (useContext = GlobalContext);
  const { users } = context;

  return (
    <>
      {users.map((user) => {
        return <Card user={user} />;
      })}
    </>
  );
};

export default HomePage;
