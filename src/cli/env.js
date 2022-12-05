const envPrefix = 'RSS';

const parseEnv = () => {
  const envNamelist = Object.keys(process.env).filter(item => item.includes(envPrefix));
  const envlist = envNamelist.map(envName => {
    return {[envName]: process.env[envName]}
  })
    .map(env => JSON.stringify(env)
      .replaceAll('"', '')
      .replace(':', '=')
      .replace('{', '')
      .replace('}', ''))
    .join('; ');
  console.log(envlist);
};

parseEnv();