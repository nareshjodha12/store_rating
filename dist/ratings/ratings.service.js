"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const rating_entity_1 = require("./entities/rating.entity");
let RatingsService = class RatingsService {
    constructor(ratingsRepository) {
        this.ratingsRepository = ratingsRepository;
    }
    async create(userId, createRatingDto) {
        const existing = await this.ratingsRepository.findOne({
            where: { userId, storeId: createRatingDto.storeId },
        });
        if (existing) {
            existing.rating = createRatingDto.rating;
            return this.ratingsRepository.save(existing);
        }
        const rating = this.ratingsRepository.create({
            userId,
            ...createRatingDto,
        });
        return this.ratingsRepository.save(rating);
    }
    findByUser(userId) {
        return this.ratingsRepository.find({
            where: { userId },
            relations: ['store'],
        });
    }
    findByStore(storeId) {
        return this.ratingsRepository.find({
            where: { storeId },
            relations: ['user'],
        });
    }
    async getStats() {
        const totalRatings = await this.ratingsRepository.count();
        return { totalRatings };
    }
    async getAverageForStore(storeId) {
        const result = await this.ratingsRepository
            .createQueryBuilder('rating')
            .select('AVG(rating.rating)', 'average')
            .where('rating.storeId = :storeId', { storeId })
            .getRawOne();
        return { average: parseFloat(result.average) || 0 };
    }
};
exports.RatingsService = RatingsService;
exports.RatingsService = RatingsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(rating_entity_1.Rating)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RatingsService);
//# sourceMappingURL=ratings.service.js.map