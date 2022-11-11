 import { MoanFlipRoom} from '../action/action';

let MoanflipRoomRDucer = (state, action) => {
  switch (action.type) {
    case MoanFlipRoom:
   
      const room = state.find(r => r.id == action.id);

      room.balance = action.balance * 2;
      const filteredRoom = state.filter(r => r.id !== room.id );
  
      state = [...filteredRoom, room]
      break;
  }
  return state;
}

export default MoanflipRoomRDucer;