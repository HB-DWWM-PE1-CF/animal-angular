export * from './animal.service';
import { AnimalService } from './animal.service';
export * from './global-stat.service';
import { GlobalStatService } from './global-stat.service';
export * from './owner.service';
import { OwnerService } from './owner.service';
export * from './race.service';
import { RaceService } from './race.service';
export * from './species.service';
import { SpeciesService } from './species.service';
export * from './token.service';
import { TokenService } from './token.service';
export const APIS = [AnimalService, GlobalStatService, OwnerService, RaceService, SpeciesService, TokenService];
