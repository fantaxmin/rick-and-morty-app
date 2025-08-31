import type { TitleSectionProps } from "../types/Characters";

const TitleSectionList = ({ title, counterFavorites }: TitleSectionProps) =>{
    return(
        <h3
            className="text-sm font-semibold text-gray-500 mt-6"
        >
            {title.toUpperCase()} ({counterFavorites})
        </h3>
    );
};

export default TitleSectionList;