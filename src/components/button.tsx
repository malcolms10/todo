import type React from "react"
import Icon from "./Icon";
import { cva, type VariantProps } from "class-variance-authority";
import Text from "./text";

export const buttonVariants = cva("flex items-center cursor-pointer transition rounded-lg group gap-2 justify-content", {
    variants: {
        variant: {
            primary: "bg-gray-200 hover:bg-pink-light",
            secondary: "bg-pink-base text-white hover:bg-pink-dark disabled:bg-pink-light disabled:text-pink-dark",
        },
        size: {
            sm: "px-2 py-1",
            md: "h-14 py-4 px-5",
            lg: "px-6 py-3"
        },
        disabled: {
            true: "pointer-events-none opacity-50",
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
        disabled: false,
    }
});

export const buttonTextVariants = cva("", {
    variants: {
        variant: {
            primary: "text-gray-400",
            secondary: "text-white"
        }
    },
    defaultVariants: {
        variant: "primary",
    }
})

export const buttonIconVariants = cva("", {
    variants: {
        variant: {
            primary: "fill-pink-base",
            secondary: "fill-white"
        },
        size: {
            sm: "w-4 h-4",
            md: "w-5 h-5",
            lg: "w-6 h-6"
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
    }
})

interface ButtonProps extends Omit <React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {
    icon?: React.ComponentProps<typeof Icon>["svg"];
}

export default function Button ({
    variant,
    size,
    className,
    disabled,
    children,
    icon: IconComponent,
    ...props
}: ButtonProps) {
    return (
    <button className={buttonVariants({ variant, size, disabled, className })} {...props}>
        {IconComponent && (<Icon svg={IconComponent} className={buttonIconVariants({ variant, size })} />)}
        <Text variant="body-md-bold" className={buttonTextVariants({ variant})}>
            {children}
        </Text>
    </button>
    )
}