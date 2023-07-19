import delPath from '../utils/delpath';
import { series, parallel, src, dest } from 'gulp';
import { componentPath, pkgPath, localePath } from '../utils/paths';
//@ts-ignore
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import autoprefixer from 'gulp-autoprefixer';
import run from '../utils/run';

export const removeDist = () => {
  return delPath(`${pkgPath}/tu-view-plus`);
};

export const buildStyle = () => {
  const sass = gulpSass(dartSass);
  return src(`${componentPath}/src/**/style/**.scss`)
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(dest(`${pkgPath}/tu-view-plus/lib/src`))
    .pipe(dest(`${pkgPath}/tu-view-plus/es/src`));
};

export const buildComponent = async () => {
  run('pnpm run build', componentPath);
};

export const buildFullLocale = async () => {
  run('pnpm run build', localePath);
};

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent(),
    async () => buildFullLocale()
  )
);
