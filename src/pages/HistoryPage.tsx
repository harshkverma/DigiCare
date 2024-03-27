import "./style.scss";
import { DigiCareDrawer } from "../modules/homepage/drawer/Drawer";
import { History } from "../modules/history";
import { useContext } from "react";
import { AppContext } from "../context/app";
import { ContextProps } from "../context/interface";

const HistoryPage = () => {
  const { user } = useContext(AppContext) as ContextProps;
  return (
    <DigiCareDrawer>
      <History username={user.user_name} />
    </DigiCareDrawer>
  );
};

export default HistoryPage;
