import { arrayOf, shape, string } from "prop-types";
import { Link, MenuList } from "./styles";
import { Link as RRLink } from "react-router-dom";

export default function Menu({ items }) {
  return (
    <nav>
      <MenuList>
        {items.map(({ name, route }) => (
          <li key={route}>
            <Link to={route} component={RRLink}>
              {name}
            </Link>
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
