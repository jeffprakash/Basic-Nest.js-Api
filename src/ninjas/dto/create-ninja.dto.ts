import { MinLength } from "class-validator";

export class CreateninjaDto {

    @MinLength(4)
    name: string;
    
    food: string;
    
}
