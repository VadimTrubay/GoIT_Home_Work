import fs from 'fs/promises';

// Перевіряємо доступність файлу або каталогу за вказаним шляхом
(async () => {
  const path = 'src/file.txt';
  try {
    await fs.access(path);
    console.log(`Файл або каталог '${path}' доступний.`);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(`Файл або каталог '${path}' не існує.`);
    } else {
      console.error(
        `Помилка перевірки доступності файлу або каталогу '${path}':`,
        err,
      );
    }
  }
})();