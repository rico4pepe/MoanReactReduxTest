import { MoanFlipRoom, flipRoom } from '../action/action';

let MoanflipRoomRDucer = (state, action) => {
  switch (action.type) {
    case MoanFlipRoom:
      console.log(state)
      const room = state.find(r => r.id == action.id);
      console.log(room)
      room.balance = action.balance * 2;
      const filteredRoom = state.filter(r => r.id !== room.id );
      console.log(filteredRoom)
      state = [...filteredRoom, room]
      break;
  }
  return state;
}

export default MoanflipRoomRDucer;