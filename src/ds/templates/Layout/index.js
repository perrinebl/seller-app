import { Outlet } from "react-router-dom";
import { Header, Menu } from "../../molecules";

const items = [
  { name: "Produits", route: "/" },
  { name: "Commandes", route: "/orders" },
  { name: "Finance", route: "/finance" },
  { name: "Rapports", route: "/reports" },
  { name: "Messages", route: "/messages" },
  { name: "Marketplaces", route: "/marketplaces" },
];

export default function Layout() {
  return (
    <>
      <Header title="Seller App" caption="Bienvenue" />
      <Menu items={items} />
      <Outlet />
    </>
  );
}
