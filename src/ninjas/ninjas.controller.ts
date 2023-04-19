import { Controller, Get, Param,Query,Post,Body, ParseIntPipe, Put,Delete, NotFoundException, ValidationPipe} from '@nestjs/common';
import { CreateninjaDto } from './dto/create-ninja.dto';
import { NinjasService } from './ninjas.service';
import { UpdateninjaDto } from './dto/update-ninja.dto';
import { NotFoundError } from 'rxjs';


@Controller('ninjas')
export class NinjasController {

    constructor(private readonly ninjaservice: NinjasService){}

    @Get()
    getninjas(@Query('food') food:'rice'|'ice'){
        //const service=new NinjasService();
        
        return this.ninjaservice.getninja(food);
           
        
    }    

    @Get(':id')
    getninjasid(@Param('id',ParseIntPipe) id:number){
       
       try {
        
        return  this.ninjaservice.getone(id);    //or add + before id to typecast it

       } catch (error) {
        
        throw new NotFoundException();
       }
        
        
    }   

    @Post()
    createninja(@Body(new ValidationPipe) createninjaDto: CreateninjaDto){
        return this.ninjaservice.createninja(createninjaDto);
        
    }  

    @Put()
    updateninja(@Param('id') id:string,@Body() updateninjadto:UpdateninjaDto)
    {
        return this.ninjaservice.updateninja(+id,updateninjadto)
    }

    @Delete()
    deleteninja(@Param('id') id:string,)
    {
        return this.ninjaservice.removeninja(+id);
    }


}
