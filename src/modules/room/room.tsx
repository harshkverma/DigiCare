import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

export const RoomData = () => {
  const { roomId } = useParams();
  function makeid(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  async function meetingUI(element) {
    const appId = 953641338;
    const ServerSecret = "49af3c2da994a62448f8b64c2aa8096b";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      ServerSecret,
      roomId,
      makeid(10),
      "ASEProject",
    );
    const ui = ZegoUIKitPrebuilt.create(kitToken);
    ui.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  }
  return (
    <Grid>
      RoomId: {roomId}
      <div ref={meetingUI}></div>
    </Grid>
  );
};
