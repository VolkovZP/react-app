import Aloha from "../Aloha";

export default function AlohaList({ users, deleteUser }) {
    const createUserGreeting = (users) =>
        users.map(({ name, id }, index) => (
            <li key={id}>
                <Aloha name={name} userId={id} deleteUser={deleteUser} />
            </li>
        ))
    return <ul>{createUserGreeting(users)}</ul>

}
