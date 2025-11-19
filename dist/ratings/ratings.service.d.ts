import { Repository } from 'typeorm';
import { Rating } from './entities/rating.entity';
import { CreateRatingDto } from './dto/create-rating.dto';
export declare class RatingsService {
    private ratingsRepository;
    constructor(ratingsRepository: Repository<Rating>);
    create(userId: number, createRatingDto: CreateRatingDto): Promise<Rating>;
    findByUser(userId: number): Promise<Rating[]>;
    findByStore(storeId: number): Promise<Rating[]>;
    getStats(): Promise<{
        totalRatings: number;
    }>;
    getAverageForStore(storeId: number): Promise<{
        average: number;
    }>;
}
