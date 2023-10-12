import { API_SERVICE, fetcher } from '@/service';
import Image from 'next/image';
import useSWR from 'swr';

const UserPage = () => {
  const { data, isLoading, error } = useSWR(API_SERVICE.users, fetcher);

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>ha ocurrido un error</div>;

  return (
    <main className='flex flex-col items-center p-10 gap-5'>
      <section>
        <h1>Gestión de usuarios</h1>
      </section>
      <section>
        <table>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Correo electronico</th>
            </tr>
          </thead>
          <tbody>
            {data?.users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>
                    <Image
                      className='rounded-full'
                      src={user.image}
                      alt={'user image'}
                      height={30}
                      width={30}
                    />
                  </td>
                  <td> {user.name} </td>
                  <td> {user.email} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default UserPage;
