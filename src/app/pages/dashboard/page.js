import { getUsers } from "@/app/functions/handlerAcessAPI";
import './dashboard.css'

export default async function Dashboard() {
   const users = await getUsers();
    return (
        <div>
            <h1>Dashboard</h1>
            <div>
                {users?.map((user, index) =>
                    <p key={index}>
                        {user.name}
                    </p>
                )}
            </div>
        </div>
    );
};