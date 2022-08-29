import React from 'react';
import { ButtonContent, ButtonRight, ButtonWrapper } from 'components/Button/Button.styles';

type ButtonProps = {
  children: React.ReactNode;
  right?: boolean;
  onClick: VoidFunction;
  isActive?: boolean;
  onCrossClick: VoidFunction;
};

const Button: React.FC<ButtonProps> = ({ right, onClick, onCrossClick, children, isActive }: ButtonProps) => {
  const handleClick = React.useCallback(() => {
    if (!isActive) {
      onClick();
    }
  }, [isActive, onClick]);

  return (
    <ButtonWrapper onClick={handleClick} isActive={isActive}>
      <ButtonContent>{children}</ButtonContent>
      {right ||
        (isActive && (
          <ButtonRight onClick={onCrossClick} isActive={isActive}>
            {right}
          </ButtonRight>
        ))}
    </ButtonWrapper>
  );
};

export default Button;
