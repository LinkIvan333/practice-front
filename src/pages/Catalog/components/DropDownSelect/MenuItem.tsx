import * as React from "react";
import styled from "styled-components";

type Props = {
    active?: boolean;
    disabled?: boolean;
    value: any;
    onClick?(): void;
} & React.HTMLAttributes<HTMLDivElement>;

const Item = styled.div<{ disabled?: boolean; active?: boolean }>`
  padding: 5px 10px;
  cursor: ${(p) => (p.disabled ? "initial" : "pointer")};
  opacity: ${(p) => (p.disabled ? 0.5 : 1)};
  background-color: ${(p) => (p.active ? "#ccc" : "transparent")};
`;

export const MenuItem = React.forwardRef<HTMLDivElement, React.PropsWithChildren<Props>>((props, ref) => {
    const { active, disabled, children, ...rest } = props;

    return (
        <Item {...rest} ref={ref} disabled={disabled} active={active}>
            {props.children}
        </Item>
    );
});

