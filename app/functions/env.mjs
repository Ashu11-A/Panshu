import fs from 'fs';
import dotenv from 'dotenv';

function envLD(envKey, Locale) {
  let EnvLocate
  if(!Locale){
    EnvLocate = '.env'
  } else {
    EnvLocate = Locale
  }
  // Lê o conteúdo do arquivo .env
  const envData = fs.readFileSync(EnvLocate, 'utf8');

  // Remove as linhas que começam com "#" e as linhas vazias
  const dataload = envData
    .split('\n')
    .filter(line => line.trim() !== '' && !line.trim().startsWith('#'))
    .join('\n');

  // Transforma em process.env
  const env = dotenv.parse(dataload);
  // Coleta o process.env específico
  for (const key in env) {
    process.env[key] = env[key];
  }

  // Verifica se a chave especificada está presente no objeto env (process.env)
  if (envKey in process.env) {
    return process.env[envKey];
  } else {
    // Retorna o objeto inteiro envData convertido para JSON
    // Converte para o formato JSON desejado: "chave":"valor"
    const jsonData = dataload
      .split('\n')
      .map(line => {
        const [key, value] = line.split('=');
        return `"${key.trim()}":"${value.trim()}"`;
      })
      .join(',');

    return JSON.parse(`{${jsonData}}`);
  }
}

function envSV(envKey, envValue, Locale) {
  let EnvLocate
  if(!Locale){
    EnvLocate = '.env'
  } else {
    EnvLocate = Locale
  }
  // Lê o conteúdo do arquivo .env
  const envData = fs.readFileSync(EnvLocate, 'utf8');

  // Divide o conteúdo em linhas
  const lines = envData.split('\n');

  // Atualiza a variável de ambiente especificada
  const updatedLine = `${envKey}=${envValue}`;
  let foundKey = false;

  const updatedLines = lines.map(line => {
    // Verifica se a linha corresponde à variável de ambiente
    if (line.startsWith(envKey + '=')) {
      foundKey = true;
      return updatedLine;
    }
    return line;
  });

  // Se a variável de ambiente não foi encontrada, adiciona uma nova linha
  if (!foundKey) {
    updatedLines.push(updatedLine);
  }

  // Junta as linhas atualizadas, preservando as linhas de comentário
  const updatedContent = updatedLines.join('\n');

  // Salva o conteúdo atualizado no arquivo .env
  fs.writeFileSync(EnvLocate, updatedContent);

  // Atualiza as variáveis de ambiente no processo atual
  dotenv.config();
}

export { envLD, envSV }