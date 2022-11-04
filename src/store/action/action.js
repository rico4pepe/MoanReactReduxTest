let MoanFlipRoom = "MoanFlipRoom";

let flipRoom = (balance, id) => {
  return {
    type: MoanFlipRoom,
    balance,
    id
  }
}

export { MoanFlipRoom, flipRoom }