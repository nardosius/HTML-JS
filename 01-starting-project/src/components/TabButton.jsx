

export default function TabButton({children, onSelect, buttonSelect}) {
    
    return (
        <li>
            <button className={buttonSelect ? 'active' : undefined} onClick={onSelect}>{children}</button>
        </li>
    );
}