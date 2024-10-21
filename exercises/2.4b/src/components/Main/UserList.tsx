import { ReactElement } from "react";
import UserCard from "./UserCard";

interface UserListProps {
    title: string;
    children: ReactElement<typeof UserCard>[];
}

const UserList = (props: UserListProps) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <ul>
                {props.children}
            </ul>
        </div>
    );
}

export default UserList;