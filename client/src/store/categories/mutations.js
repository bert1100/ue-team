import * as type from './mutations_types.js';
import * as func from '../function';

export default {
	[type.POSTCATEGORIESLIST](states, obj){
        states.categorieslist = obj.items;
    },
    [type.MENUACTIVE](states, obj){
        states.activeKey = obj.items;
    }
}