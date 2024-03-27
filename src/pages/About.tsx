import { About } from "../modules/about";
import { DigiCareDrawer } from "../modules/homepage/drawer/Drawer";
import { DataContact } from "../modules/DigiDataContact";

export const DigicareAbout = () => {
  return (
    <DigiCareDrawer>
      <DataContact />
    </DigiCareDrawer>
  );
};
