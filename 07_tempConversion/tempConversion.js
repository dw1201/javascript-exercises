const ftoc = function() {
  const fTemp = -100;
  const cTemp = ((5/9)*((fTemp)-32));
  const cTempRound = Math.round(cTemp*10)/10;
  return (cTempRound);
};

const ctof = function() {

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
