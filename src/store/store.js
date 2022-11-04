import { createStore } from 'redux';
import MoanflipRoomRDucer from './reducer/reducer';
import { MoanRooms } from './rooms';

let store = createStore(MoanflipRoomRDucer, MoanRooms)

export default store;