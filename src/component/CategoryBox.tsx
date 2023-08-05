import './CategoryBox.scss'

// import qs from 'query-string';
import { useCallback } from "react";
import { IconType } from "react-icons";
import { useSearchParams } from 'react-router-dom';
interface CategoryBoxProps {
    icon: IconType,
    label: string;
    selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
    icon: Icon,
    label,
    selected,
}) => {
    const [searchParams, setSearchParams] = useSearchParams()


    return (
        <div
            onClick={() => setSearchParams({ category: label })}
            className={`category-box
       
        ${selected ? 'bg-black' : 'border-transparent'}
        ${selected ? 'text-white' : 'text-dark'}
      `}
        >
            <Icon size={26} />
            <div className="font-medium text-sm">
                {label}
            </div>
        </div>
    );
}

export default CategoryBox;