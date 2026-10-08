import { cva, cx, type VariantProps } from "class-variance-authority";
import Text from "./text";
import React from "react";
import Skeleton from "./skeleton";

export const badgeVariants = cva("inline-flex items-center rounded-full justify-content", {
    variants: {
        variant: {
            none: "",
            primary: "bg-green-light text-green-base",
            secondary: "bg-pink-light text-pink-base",
        },
        size: {
            sm: "px-0.5 py-2",
            md: "px-3 py-1.5",
            lg: "px-4 py-2"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md"
    }
});

export const badgeSkeletonVaiants = cva(
    "",{
        variants: {
            size: {
                sm: "w-6 h-6",
            }
        },
        defaultVariants: {
            size: "sm"
        }
    }
)

export const badgeTextVariants = cva("", {
    variants: {
        variant: {
            none: "",
            primary: "text-green-dark",
            secondary: "text-pink-dark",
        },
    },
    defaultVariants: {
        variant: "primary"
    }
})

interface BadgeProps extends React.ComponentProps<"div"> ,
    VariantProps<typeof badgeVariants>{
        loading?: boolean;
    }

export default function Badge( {variant, size, className, children, loading, ...props}: BadgeProps){
    if(loading){
        return (
            <Skeleton rounded="full" className={cx(badgeVariants({variant: "none"}),
                badgeSkeletonVaiants({size}),
                className
            )} />
        )
    }
    return <div className={badgeVariants({variant, size, className})} {...props}>
        <Text variant="body-sm-bold" className={badgeTextVariants({variant})}>
            {children}
        </Text>
    </div>
}