import { useQuery } from 'react-query';
import { SalesDto } from '../../interface/sales';
export function useProduct() {
    return useQuery<SalesDto>('product', );
}