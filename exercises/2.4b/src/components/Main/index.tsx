import UserCard from "./UserCard";
import UserList from "./UserList";

const Main = () => {
  return (
    <UserList title="Liste des utilisateurs">
        <UserCard name="Thimoté" age={20} online={true}/>
        <UserCard name="Elodie" age={18} online={false}/>
        <UserCard name="Raphaël" age={12} online={false}/>
    </UserList>
  );
}

export default Main;