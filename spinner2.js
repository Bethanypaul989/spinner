const spinner = '|/-\\|/-\\|'
// string containing individual stages of the spinner
let delay = 0
for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `)
  }, delay += 200);
};
// calls individual stages of the string as a template literal, overwriting each other sequentially at 200ms intervals
setTimeout(() => {
  process.stdout.write("\n")
}, delay);
// following prompt line will appear on new line after spinner completes
