import type { TitleSectionProps } from "../types/Characters";

const TitleSectionList = ({ title, counterFavorites }: TitleSectionProps) =>{
    return(
        <h3
            className="text-lg font-semibold text-gray-500"
        >
            {title} ({counterFavorites})
        </h3>
    );
};

export default TitleSectionList;