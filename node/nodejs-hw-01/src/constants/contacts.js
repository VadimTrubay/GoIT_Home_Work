import path from 'node:path';

const pathWorkDir = path.join(process.cwd());

export const PATH_DB = path.join(pathWorkDir, 'src', 'db', 'db.json');
