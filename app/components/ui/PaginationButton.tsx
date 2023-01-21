import {FC} from "react";

type PaginationButtonPropsType = {
    page: number,
    activePage: number,
    setActivePage: (page: number) => void
}

const PaginationButton: FC<PaginationButtonPropsType> = ({page, activePage, setActivePage}) => {
    return (
        <div
            className={`w-[51px] h-[51px] flex items-center justify-center rounded-full border-2 box-border border-black/50 text-lg 
            ${page === activePage && 'bg-purple text-white border-none'}`} onClick={() => setActivePage(page)}>{page}
        </div>
    );
};

export default PaginationButton;