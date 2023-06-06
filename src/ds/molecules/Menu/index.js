import { arrayOf, shape, string } from "prop-types";
import { Link, MenuList, MenuListItem } from "./styles";

export default function Menu({ items }) {
  return (
    <nav>
      <MenuList>
        {items.map(({ name, route }) => (
          <MenuListItem key={route}>
            <Link href={route}>{name}</Link>
          </MenuListItem>
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
