/**
 * @author Hugo Garcia
 * @description Funcion para obtener todos los indicadores
 * @returns 
 */
import { IndicadorByTypeEntity, IndicadorEntity } from "../entity/coins.entity";

export abstract class IndicadorContract {
    abstract getIndicadores(): Promise<IndicadorEntity[]>;
    abstract getIndicadoresByType(type: string): Promise<IndicadorByTypeEntity[]>;
}