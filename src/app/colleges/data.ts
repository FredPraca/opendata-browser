import {Expose, Type} from 'class-transformer';
import { College } from './college';

export class Data {
    @Expose( { name : 'd'})
    @Type(() => College)
    colleges: College[];
}
