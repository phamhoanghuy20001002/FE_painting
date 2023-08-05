import './categoryInput.scss'
import { IconType } from "react-icons";

interface CategoryBoxProps {
    icon: IconType,
    label: string;
    selected?: boolean;
    onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryBoxProps> = ({
    icon: Icon,
    label,
    selected,
    onClick
}) => {
    return (
        <div
            onClick={() => onClick(label)}
            className={`
            category-input
       
        ${selected ? 'border border-dark' : 'border border-light'}
      `}
        >
            <Icon size={30} />
            <div className="font-semibold">
                {label}
            </div>
        </div>
    );
}

export default CategoryInput;