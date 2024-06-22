
import React, { ComponentProps } from 'react';

interface MagicButtonProps extends ComponentProps<'button'> {
    className?: string,
    icon?: React.ReactNode,
    position?: string,
    otherclasses?: string
}

function MagicButton(props: MagicButtonProps) {
    return (
        <button { ...props } className={ `relative inline-flex w-full h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none ${ props.className }`}>
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className={`gap-2 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl ${ props.otherclasses }`}>
                { props.position === 'left' && props.icon }
                { props.children }
                { props.position === 'right' && props.icon }
            </span>
        </button>
    )
}

export default MagicButton