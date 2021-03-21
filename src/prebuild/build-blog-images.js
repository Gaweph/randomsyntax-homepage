import sharp from 'sharp';
import path from 'path';
import fs from "fs";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getNewImageFileName = (filepath, suffix) => {
  var position = filepath.lastIndexOf(".");
  return [filepath.slice(0, position), suffix, filepath.slice(position)].join(
    ""
  );
};

const processImage = async function (
  filepath,
  width,
  filenameSuffix,
  overwrite
) {
  const newFilePath = getNewImageFileName(filepath, filenameSuffix);
  const fileExists = fs.existsSync(newFilePath);
  if (overwrite || !fileExists) {
    return await sharp(filepath).rotate().resize(width).toFile(newFilePath);
  }

  return null;
};

const GetAllImagesRecursive = function (dir) {
  const images = fs.readdirSync(dir);
  let res = [];
  for (var i = 0, len = images.length; i < len; i++) {
    const file = images[i];
    let fullPath = path.join(dir, file);
    const isDirectory = fs.lstatSync(fullPath).isDirectory();
    if (isDirectory) {
      res = res.concat(GetAllImagesRecursive(fullPath));
    } else {
      res.push(fullPath);
    }
  }

  return res;
};

const DoResize = async (images, width, filenameSuffix, overwrite) => {
  for (var i = 0, len = images.length; i < len; i++) {
    await processImage(images[i], width, filenameSuffix, overwrite);
  }
  return true;
};

async function resizeImages() {
  var imagesDir = __dirname + "/../../static/content/blog/images/";
  var suffixes = ["_thumb", "_thumbnail"];
  const images = GetAllImagesRecursive(imagesDir);

  const toProcess = images.filter((x) =>
    suffixes.reduce(function (ok, suffix) {
      return ok && x.indexOf(suffix) === -1;
    }, true)
  );

  await DoResize(toProcess, 600, "_thumb", false);
  console.log("DoResize", "_thumb");
  await DoResize(toProcess, 200, "_thumbnail", false);
  console.log("DoResize", "_thumbnail");
}

export const BuildBlogImages = async () => {
  await resizeImages();
}