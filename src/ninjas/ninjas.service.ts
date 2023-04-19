import { Injectable } from '@nestjs/common';
import { CreateninjaDto } from './dto/create-ninja.dto';
import { UpdateninjaDto } from './dto/update-ninja.dto';


@Injectable()
export class NinjasService {

    private ninjas=[
        {id:0,name:'a',food:'noodle'},
        {id:1,name:'b',food:'rice'},
        {id:2,name:'c',food:'ice'},

    ]
   
     getninja(food?: 'rice'|'ice')
     {
        if (food) {
            return this.ninjas.filter((ninja)=>{return ninja.food === food});
        }
     
        return this.ninjas
    }

    getone(id:number)
    {
        const ninja=this.ninjas.find((ninja)=> ninja.id===id);
        if(!ninja)
        {
            throw new Error("non found");
        }
        return ninja;
    }

    createninja( createninjaDto: CreateninjaDto)
    {
        const newninja={
            ...createninjaDto,
            id:Date.now(),
        }
        this.ninjas.push(newninja);

        return newninja;
    }

    updateninja(id:number,updateninjadto:UpdateninjaDto)
    {
        this.ninjas=this.ninjas.map((ninja)=>{

            if (ninja.id===id) {
                return {...ninja,...updateninjadto}
            }
        
            return ninja;
        })

        return this.getone(id);

    }
   

    removeninja(id:number)
    {
        const toberemove=this.getone(id);
        this.ninjas=this.ninjas.filter((ninja)=>ninja.id !== id);

        return toberemove;

    }


}
