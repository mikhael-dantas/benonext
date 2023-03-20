export interface Tab9s {
    id: number;
    label: string;
}


export enum Tab9sEnum {
    home = "Home",
    dashboard11 = "Dashboard 1-1",
    dashboard12 = "Dashboard 1-2",
    dashboard13 = "Dashboard 1-3",
}


export const Tabs9s: Tab9s[] = [
    {
        id: 1,
        label: Tab9sEnum.home,
    },
    {
        id: 2,
        label: Tab9sEnum.dashboard11,
    },
    {
        id: 3,
        label: Tab9sEnum.dashboard12,
    },
    {
        id: 4,
        label: Tab9sEnum.dashboard13,
    },
];