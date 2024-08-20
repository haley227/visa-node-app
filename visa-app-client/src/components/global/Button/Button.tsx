import { StyledButton } from './Button.style';

interface ButtonProps {
  buttonText: string;
  onClick?: () => void;
  type: 'button' | 'submit' | 'error';
  disabled?: boolean;
}

export const Button = ({ buttonText, onClick, type, disabled = false }: ButtonProps) => (
  <StyledButton onClick={onClick} disabled={disabled} type={type}>
    {buttonText}
  </StyledButton>
);
