//process.stdout.write('hello from spinner1.js... \rheyyy\n');

setTimeout(() => {
  process.stdout.write('\r| ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/ ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r- ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r| ');
}, 700);

setTimeout(() => {
  // need to escape the backslash since its special character
  process.stdout.write('\r\/ ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r- ');
}, 1000);

setTimeout(() => {
  process.stdout.write('\r\\ ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r| ');
}, 1500);

setTimeout(() => {
  process.stdout.write('\n');
}, 1700);

