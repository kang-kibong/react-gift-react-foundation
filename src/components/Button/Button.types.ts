export type ButtonTheme = 'primary' | 'kakao';
export type ButtonSize = 'small' | 'medium' | 'large' | 'responsive';

export interface StyledButtonProps {
  theme: ButtonTheme;
  size: ButtonSize;
}
