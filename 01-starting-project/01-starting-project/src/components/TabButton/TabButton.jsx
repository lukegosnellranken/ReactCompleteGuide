import { Children } from "react";


export default function TabButton({children, onSelect, isSelected}) {



 return (
    <div>
        <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
    </div>
 )
}