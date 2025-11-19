import { RatingsService } from './ratings.service';
import { CreateRatingDto } from './dto/create-rating.dto';
export declare class RatingsController {
    private ratingsService;
    constructor(ratingsService: RatingsService);
    create(req: any, createRatingDto: CreateRatingDto): Promise<import("./entities/rating.entity").Rating>;
    getMyRatings(req: any): Promise<import("./entities/rating.entity").Rating[]>;
    getStoreRatings(storeId: string): Promise<import("./entities/rating.entity").Rating[]>;
    getStats(): Promise<{
        totalRatings: number;
    }>;
    getAverage(storeId: string): Promise<{
        average: number;
    }>;
}
