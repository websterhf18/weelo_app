import { IndicadorByTypeEntity, IndicadorEntity } from "../entity/coins.entity";

export abstract class IndicadorContract {
    abstract getIndicadores(): Promise<IndicadorEntity[]>;
    abstract getIndicadoresByType(type: string): Promise<IndicadorByTypeEntity[]>;
}