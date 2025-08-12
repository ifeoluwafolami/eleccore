import React, { type ReactNode } from "react";

export interface ButtonProps {
    text: string | ReactNode; //text to be displayed inside the button
    onClick?: () => void; //function called when button is clicked
    type?: "button" | "submit" | "reset";
    disabled?: boolean; //if true, button is disabled and cannot be clicked
    className?: string; //additional classes to be added to the button
    variant?: "solid" | "outline" | "none"; //button style variants
    size?: "small" | "medium" | "large" | "xlarge"; //button size variants
    loading?: boolean;
    key?: string;
}

export const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    type = 'button',
    disabled = false,
    className = "",
    variant = "solid",
    size = "medium",
    loading = false,
    key = ""
}) => {
    const baseClasses = "rounded-md font-raleway font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-200 ease-in-out flex items-center justify-center gap-2";

    const variantClasses = {
        solid: "bg-black text-white hover:bg-black/90 hover:text-white/60 hover:scale-105 focus:ring-blue",
        outline: "border-black border-2 text-black hover:bg-sec-orange hover:text-white",
        none: "bg-transparent hover:border-b-4 hover:rounded-none"
    }
    const sizeClasses = {
        small: "w-24 h-10 text-sm",     
        medium: "w-32 h-12 text-base", 
        large: "w-36 h-14 text-lg", 
        xlarge: "w-40 h-16 text-lg",
    };

    const disabledClasses = "opacity-50 cursor-not-allowed";
    const loadingClasses = "cursor-wait";

    const isDisabled = disabled || loading;
    const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${isDisabled ? disabledClasses : ""} ${loading ? loadingClasses : ""} ${className}`;

    const LoadingSpinner = () => (
        <div className="animate-spin rounded-full h-5 w-5 border-2 border-current border-t-transparent"></div>
    );

    const getButtonContent = () => {
        if (loading) {
            return (
                <>
                    <LoadingSpinner />
                    <span>Processing...</span>
                </>
            );
        }
        return text;
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={isDisabled}
            className={buttonClasses}
            key={key}
        >
            {getButtonContent()}
        </button>
    );
};