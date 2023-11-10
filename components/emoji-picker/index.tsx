"use client"

import * as React from 'react';
import {Button} from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {emojis} from "./emoji-list"

type Props = {
    value: string,
    setValue: (value: string) => void,
};
const EmojiIconPicker = (props: Props) => {

    const buttonRef = React.useRef<HTMLButtonElement>(null)

    React.useEffect(() => {
        if (props.value.length == 0) {
            props.setValue(emojis[Math.floor(Math.random() * emojis.length)])
        }
    },[])
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    ref={buttonRef}
                    variant="outline"
                >
                    {props.value}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 h-80 overflow-hidden">
                <div className={"h-full w-full overflow-y-auto overflow-x-clip scrollbar-hide"}>
                    <div className="grid grid-cols-8 gap-x-2 gap-y-3">
                        {emojis.map((emoji: string, index: number) => (
                            <Button key={index} variant="ghost" size={"icon"} onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                props.setValue(emoji)
                                buttonRef.current?.click()
                            }}>
                                {emoji}
                            </Button>
                        ))}
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default EmojiIconPicker;