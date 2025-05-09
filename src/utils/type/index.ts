

export interface CategoryType {
    id: string,
    name: string,
    image: string
}

export interface CagnotteMediumType {
    id: string,
    title: string,
    solde: number,
    besoin: number,
    participant: number,
    image: string
}


export interface DonAmmountType {
    id: string,
    amount: string
}

export interface SideBarItemType {
    id: string,
    image: string,
    title: string,
    text: string,
    path: string,
    soon: boolean
}

export interface SideBarItemProps {
    item: SideBarItemType
}

export interface CcmListSectionType {
    id: string,
    icon: string,
    title: string,
    text: string,
    image: string,
    direction: boolean
}

export interface CcmListSectionProps {
    item: CcmListSectionType
}
