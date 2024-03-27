export interface DigiCareIconsProps {
  iconFor: DigiCareIconEnum;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  size?: IconSize;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export enum IconSize {
  small = "small",
  medium = "medium",
  large = "large",
}

export enum DigiCareIconEnum {
  feed = "feed",
  avatar = "avatar",
  sosCall = "sos",
}

export interface CustomHamburgerIconProps {
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}
