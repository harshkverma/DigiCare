export interface DigiStickyHeaderTableProps<T> {
  columns: DigiStickyHeaderTableColumnsProps[];
  rows: Array<T>;
}

export interface DigiStickyHeaderTableColumnsProps {
  id: string;
  label: string;
  minWidth?: number;
  align?: "left" | "center" | "right";
  format?: (value: number) => string;
  object_field?: Array<string>;
  object_joiner?: string;
  render?: (value: any) => string;
}
