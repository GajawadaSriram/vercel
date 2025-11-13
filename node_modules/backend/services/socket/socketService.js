let ioInstance = null;

const initialize = (io) => {
  ioInstance = io;
  ioInstance.on("connection", (socket) => {
    const { routeId } = socket.handshake.query || {};
    if (routeId) {
      socket.join(`route:${routeId}`);
    }
    socket.on("disconnect", () => {
      // noop - placeholder for future cleanup
    });
  });
};

const emitToRoute = (routeId, event, payload) => {
  if (!ioInstance) {
    console.warn(`Attempted to emit "${event}" before socket server initialised`);
    return;
  }
  ioInstance.to(`route:${routeId}`).emit(event, payload);
};

module.exports = {
  initialize,
  emitToRoute,
};


