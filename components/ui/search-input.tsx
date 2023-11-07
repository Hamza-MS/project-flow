import * as React from "react"

import {cn} from "@/lib/utils"
import {MagnifyingGlassIcon} from "@radix-ui/react-icons";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
}

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(
    ({className, type, ...props}, ref) => {
        return (
            <div className={""}>
                <MagnifyingGlassIcon className={"absolute h-4 w-4 ml-3 mt-3 text-muted-foreground"}/>
                <input
                    type={type}
                    className={cn(
                        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-9 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                        className
                    )}
                    ref={ref}
                    placeholder={props.placeholder ?? "Search"}
                    {...props}
                />
            </div>
        )
    }
)
SearchInput.displayName = "Input"

export {SearchInput}