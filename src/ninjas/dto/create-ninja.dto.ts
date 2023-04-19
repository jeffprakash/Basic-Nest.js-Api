import { IsEnum, MinLength,  } from "class-validator";

export class CreateninjaDto {

    @MinLength(4)
    name: string;
    
    @IsEnum(['rice','ice'],{message:'type correct food'})
    food: string;
    
}
