const hours = 26;
const start = 1667497000636;

const startTime = (start/1000).toFixed(0);
const finalTime = (start/1000+hours*3600).toFixed(0);

export {finalTime, startTime, hours};