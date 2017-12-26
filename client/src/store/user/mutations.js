import * as type from './mutations_types.js';
import * as func from '../function';

export default {
	[type.POSTUSERLIST](states, obj){
        states.userlist = obj.items;
    }
}