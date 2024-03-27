import { AdminTasks } from "../modules/admin";
import { DigiCareDrawer } from "../modules/homepage/drawer/Drawer";

export const AdminOperations = () => {
  return (
    <DigiCareDrawer>
      <AdminTasks />
    </DigiCareDrawer>
  );
};
