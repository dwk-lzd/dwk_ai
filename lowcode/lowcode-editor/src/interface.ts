import type {
    PropsWithChildren,
} from 'react';

export interface CommonComponentProps extends PropsWithChildren {
    id: number,
    name: string,
    [key: string]: any, // 这是索引签名，允许任意额外的属性
}
