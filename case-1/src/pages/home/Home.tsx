import { Heading } from "@design-system/heading";
import { ROUTES } from "constants/routes.ts";
import Link from "components/link/Link.tsx";
import styles from './Home.module.scss';

const Home = () => {
  return (
    <main className={styles.main}>
      <Heading as="h1">Welcome</Heading>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href={ROUTES.origin}>Original</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Home;
