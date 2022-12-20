import {FC} from 'react';
import PaginationButton from "@/ui/PaginationButton";

type paginationPropsType = {
    length: number,
    activePage: number,
    setActivePage: (activePage: number) => void
}


const Pagination: FC<paginationPropsType> = ({length, activePage, setActivePage}) => {

    let pagesCount = Math.ceil(length / 3)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={'h-[51px] w-[1477px] px-[32px] mt-[28px] text-sm text-gray flex justify-between items-center'}>
            <div>
                Showing <span className={'text-black font-semibold'}>{activePage} - {activePage + 2}</span> from <span
                className={'text-black font-semibold'}>{length}</span> data
            </div>
            <div className={'flex gap-[16px]'}>
                {
                    pages.map(el => <PaginationButton page={el} activePage={activePage} key={el} setActivePage={setActivePage}/>)
                }
            </div>
        </div>
    );
}

export default Pagination;