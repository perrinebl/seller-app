import { arrayOf, shape, string } from "prop-types";
import { Link, MenuList } from "./styles";

export default function Menu({ items }) {
  return (
    <nav>
      <MenuList>
        {items.map(({ name, route }) => (
          <li key={route}>
            <Link href={route}>{name}</Link>
          </li>
        ))}
      </MenuList>
    </nav>
  );
}

Menu.propTypes = {
  items: arrayOf(
    shape({
      name: string,
      route: string,
    })
  ),
};
