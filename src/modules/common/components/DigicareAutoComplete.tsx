import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {
  DigicareAutoCompleteDataProps,
  DigicareAutoCompleteProps,
} from "../interface/DigicareAutoComplete";

export default function DigiCareAutocomplete({
  data,
  handleAutocompleteChange,
  className,
  placeHolder,
  isGroupByFirstLetter,
  style,
  unsorted,
  handleFocus,
  isMultiSelect,
  value,
}: DigicareAutoCompleteProps) {
  const options = data?.map((option) => {
    const firstLetter = option.label[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  const objectValues: any = isMultiSelect
    ? (value as string[])?.map((v) => {
        return data.find((d) => d.value === v);
      })
    : data.find((d) => d.value === value);

  return (
    <Autocomplete
      className={className}
      id="grouped-demo"
      options={
        unsorted
          ? options
          : options?.sort(
              (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
            ) || []
      }
      multiple={isMultiSelect}
      groupBy={(option) => (isGroupByFirstLetter ? option.firstLetter : "")}
      getOptionLabel={(option) => option?.label}
      style={style}
      renderInput={(params) => <TextField {...params} label={placeHolder} />}
      onChange={(
        event: any,
        newValue: DigicareAutoCompleteDataProps | null
      ) => {
        handleAutocompleteChange(newValue);
      }}
      getOptionDisabled={(option) =>
        options.find((element) => element === option).disabled
      }
      onFocus={handleFocus}
      defaultValue={objectValues}
    />
  );
}
