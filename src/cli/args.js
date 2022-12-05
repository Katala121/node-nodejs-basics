const parseArgs = () => {
  const args = process.argv.slice(2);
  const handleArgs = args.join(' ')
    .split('--')
    .filter(item => item.trim())
    .map(item => item.trim().replace(' ', ' is '))
    .join(', ');
  console.log(handleArgs);
};

parseArgs();