/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.angle = (req, res) => {

  res.set('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    res.status(204).send('');
  } else {
  
    if (!req.body.x) {

      res.status(400).send('bad request.');

    } else {

      let dif = 0;
      let x = parseFloat(req.body.x);

      if (x <= 180 && x > 0) {
        dif = (180 - x);
      } else if (x < 0) {
        dif = "Invalid entry. Number must be greater than 0.";
      } else if (x > 180) {
        dif = "Invalid entry. Number must be less than 180.";
      } else {
        dif = "Invalid entry. Enter a number.";
      }
      
      res.status(200).send(dif.toString());
    } 
  }
};
