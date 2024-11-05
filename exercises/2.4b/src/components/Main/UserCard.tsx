import "./UserCard.css";

interface UserCardProps {
    name: string;
    age: number;
    online: boolean;
}

const UserCard = (props: UserCardProps) => {
    return (
        <div className="card">
            <h4 className="card-name">{props.name}</h4>
            <p className="card-age">Age: {props.age}</p>
            <p className={props.online ? 'online' : 'offline'}>{props.online ? "En ligne" : "Hors ligne"}</p>
        </div>
    );
}

export default UserCard;