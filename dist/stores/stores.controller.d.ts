import { StoresService } from './stores.service';
import { CreateStoreDto } from './dto/create-store.dto';
export declare class StoresController {
    private storesService;
    constructor(storesService: StoresService);
    create(createStoreDto: CreateStoreDto): Promise<import("./entities/store.entity").Store>;
    findAll(filters: any): Promise<any[]>;
    getStats(): Promise<{
        totalStores: number;
    }>;
    findOne(id: string): Promise<import("./entities/store.entity").Store>;
}
