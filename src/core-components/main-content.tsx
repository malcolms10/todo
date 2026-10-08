import React from "react";
import {cx} from "class-variance-authority";

interface MaincontentProps extends React.ComponentProps<"main"> {}

export default function Maincontent({
    children,
    className,
    ...props
}: MaincontentProps) {
    return( 
    <main className={cx("mt-4 md:mt-8", className)} {...props}>
        {children}
    </main>
    )
}