import { getUsers } from "@/app/functions/handlerAcessAPI";
import Navbar from "../../components/navbar";
import './dashboard.css'

export default async function Dashboard() {
    const users = await getUsers();
    return (
        <div>
            <Navbar />
            <h1>Dashboard</h1>
            <div className="gridUser">
                {users?.map((user, index) =>
                    <div key={index} className="user-card">
                        <img src="data:image/png;base64,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" alt="User Avatar" />
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                )}
            </div>
        </div>
    );
};