import NewButton from "./NewButton";
import { List } from "./list";

const Sidebar = () => {
  return (
    <aside className="fixed h-full z-[1] left-0 bg-blue-950 w-20 flex p-3 flex-col gap-y-4 text-white">
      <List />
      <NewButton />
    </aside>
  );
};

export default Sidebar;
