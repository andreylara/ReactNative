export type ProductNavigationProps = {
    id?: string;
}

export type PurchaseNavigationProps = {
    id: string;
}

export declare global {
    namespace ReactNavigation{
        interface RootParamList {
            home: undefined;
            product?: ProductNavigationProps;
            purchase: PurchaseNavigationProps;
            list: undefined;
        }
    }
}