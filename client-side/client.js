const socket = io('http://localhost:5000'); // Connect to the server

socket.on('connect', () => {
  console.log('Connected to the server');
});
 




