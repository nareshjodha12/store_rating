import { Repository } from 'typeorm';
import { Store } from './entities/store.entity';
import { CreateStoreDto } from './dto/create-store.dto';
export declare class StoresService {
    private storesRepository;
    constructor(storesRepository: Repository<Store>);
    create(createStoreDto: CreateStoreDto): Promise<Store>;
    findAll(filters?: any): Promise<any[]>;
    getStats(): Promise<{
        totalStores: number;
    }>;
    findOne(id: number): Promise<Store>;
}
