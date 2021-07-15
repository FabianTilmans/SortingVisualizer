import React, { FC } from "react";

type Props = {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    href?: string;
    styles?: {};
    className?: string;
};

const Button: FC<Props> = ({ label, onClick, disabled, href, styles, children, className }) => {
    if (href) {
        return (
            <a href={href} className={className}>
                <span className="Button__Label">{children}</span>
            </a>
        );
    }
    return (
        <button onClick={onClick} style={styles} disabled={disabled}>
            {label}
        </button>
    );
};

export default Button;
