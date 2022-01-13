type ViewMode = "random" | "chronological" | "saved";

interface ApplicationBarProps {
    onMenuItemClick: Function
}

interface AccordionProps {
    imageTitle : string,
    imageExplanation : string,
    imageDate : string,
    expanded : boolean
}

interface ApplicationBodyProps {
    viewMode : ViewMode,
    loadMoreData: boolean,
    onNoMoreData: Function,
    onDataLoaded: Function,
    onExtraDataLoaded: Function
}

interface ApplicationMainProps {
}

interface CardMediaComponentProps {
    imageURL: string
}

interface DrawerProps {
    menuOpen: boolean,
    onMenuClickAway: Function,
    onMenuItemClick: Function
}

interface FavouriteButtonProps {
    imageDate: string
}

interface ImageCardProps {
    data: DataObject
}

interface DataObject {
    url: string,
    date: string,
    title: string,
    explanation: string
}

interface LoadMoreDataProps {
    visible: boolean,
    dataLoaded: boolean,
    onVisible: Function
}