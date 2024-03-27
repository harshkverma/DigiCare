import { CSSProperties, SyntheticEvent } from "react";

export interface DigicareAutoCompleteProps {
  data: DigicareAutoCompleteDataProps[] | undefined;
  className?: string;
  placeHolder?: string;
  handleAutocompleteChange: (
    value:
      | DigicareAutoCompleteDataProps
      | DigicareAutoCompleteDataProps[]
      | null,
  ) => void;
  isGroupByFirstLetter?: boolean;
  style?: CSSProperties;
  unsorted?: boolean;
  handleFocus?: () => void;
  isMultiSelect?: boolean;
  value?: Array<string> | string;
}

export interface DigicareAutoCompleteDataProps {
  label: string;
  value: string | number;
  firstLetter?: string;
  disabled?: boolean;
}
