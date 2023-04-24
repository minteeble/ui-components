export interface InfoBoxProps {
  title: string;
  value: string;
  subTitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}
