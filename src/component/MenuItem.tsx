import './MenuItem.scss'
interface MenuItemProps {
    onClick: () => void;
    label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    label
}) => {
    return (
        <div
            onClick={onClick}
            className="menu-item-child"
        >
            {label}
        </div>
    );
}

export default MenuItem;