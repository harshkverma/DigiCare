export interface DigicareDialogueBoxProps {
  title?: string;
  content?: string;
  okButtonText?: string;
  cancelButtonText?: string;
  isOpen: boolean;
  handleClose?: () => void;
  handleNewRecordings?: () => void;
}
