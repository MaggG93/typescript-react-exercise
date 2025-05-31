import { UserRow } from "./UserRow";
import { useUsers } from "./hooks/useUsers";
// https://reqres.in/api/users?page=2

export const UsersPage = () => {
  const { users, nextPage, previousPage } = useUsers();

  return (
    <>
      <h1>Usuarios: </h1>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={previousPage}>Anteriores</button>
        <button onClick={nextPage}>Siguientes</button>
      </div>
    </>
  );
};
