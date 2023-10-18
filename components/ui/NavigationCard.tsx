import Link from 'next/link';

interface NavigationCardProps {
  tittle: string;
  description: string;
  href: string;
}
const NavigationCard = ({ tittle, description, href }: NavigationCardProps) => {
  return (
    <div className='navigation-card'>
      <Link href={href}>
        <div className='flex flex-col items-center'>
          <h3>{tittle}</h3>
          <span> {description} </span>
        </div>
      </Link>
    </div> // Se utiliza LINK en vez de a para que la pagina no tenga que cargar las paginas y sea mas rapido
  );
};

export { NavigationCard };
