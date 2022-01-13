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