// intent('hello world', p => {
//     p.play('(hello|hi there)');
// });

// intent('start a command', p => {
//     p.play({command:'test'});
// });

// intent('Get me a joke', p => {
//  const request_url = `https://v2.jokeapi.dev/joke/Programming?type=single`;
//     api.request(request_url, (error, res, body) => {
//         if (error || res && res.statusCode !== 200) {
//             p.play('Could not get weather information');
//         } else {
//             let data = JSON.parse(body);
//             let joke = data.joke;
//             p.play({command:'getJoke',joke});
//         }
//     });
// });
