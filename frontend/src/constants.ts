import {
  AsciiVideoIcon,
  AsciiVideoScreenshot,
  EnlightIcon,
  EnlightScreenshot,
  MinesweeperIcon,
  MinesweeperScreenshot,
  PathfinderVisualizerIcon,
  PathfinderVisualizerScreenshot,
  ShareMeIcon,
  ShareMeScreenshot,
  SuDoneKuIcon,
  SuDoneKuScreenshot,
  GifsterScreenshot,
  DreadUiScreenshot,
} from '@repo/assets';

export const apps = [
  {
    name: 'test-child',
    url: '/test-child',
    devUrl: 'http://localhost:3000/test-child/',
    icon: '',
    alt: 'Test App',
    image: '',
    background: 'bg-red-500',
    description: 'This is a test child app',
  },
  {
    name: 'enlight',
    url: '/enlight',
    devUrl: 'http://localhost:3000/enlight/',
    icon: EnlightIcon,
    alt: 'Enlight Icon',
    image: EnlightScreenshot,
    background: 'black',
    description: 'A relaxing playground of shine and shadow.',
  },
  {
    name: 'minesweeper',
    url: '/minesweeper',
    devUrl: 'http://localhost:3000/minesweeper/',
    icon: MinesweeperIcon,
    alt: 'Minesweeper Icon',
    image: MinesweeperScreenshot,
    background: 'rgb(31,47,134)',
    description: `Ittttttt's Minesweeper!`,
  },
  {
    name: 'pathfinder-visualizer',
    url: '/pathfinder-visualizer',
    devUrl: 'http://localhost:3000/pathfinder-visualizer/',
    icon: PathfinderVisualizerIcon,
    alt: 'Pathfinder Visualizer Icon',
    image: PathfinderVisualizerScreenshot,
    background: 'rgb(108,117,125)',
    description: 'A pathfinding visualizer, coded in React.',
  },
  {
    name: 'ascii-video',
    url: '/ascii-video',
    devUrl: 'http://localhost:3000/ascii-video/',
    icon: AsciiVideoIcon,
    alt: 'Matrix-Cam Icon',
    image: AsciiVideoScreenshot,
    background: 'black',
    description: 'Vanilla JS app using TensorFlow.js for person detection.',
  },
  {
    name: 'shareme',
    url: '/shareme',
    devUrl: 'http://localhost:3000/shareme/',
    icon: ShareMeIcon,
    alt: 'ShareMe Icon',
    image: ShareMeScreenshot,
    background: 'rgb(20,20,20)',
    description: 'A Pinterest-inspired social media app.',
  },
  {
    name: 'dread-ui',
    url: '/dread-ui',
    devUrl: 'http://localhost:3000/dread-ui/',
    icon: '',
    alt: 'dread ui',
    image: DreadUiScreenshot,
    background: 'rgb(31,47,134)',
    description: 'A component library I use across my projects.',
  },
  {
    name: 'su-done-ku',
    url: '/su-done-ku',
    devUrl: 'http://localhost:3000/su-done-ku/',
    icon: SuDoneKuIcon,
    alt: 'su-done-ku',
    image: SuDoneKuScreenshot,
    background: 'rgb(31,47,134)',
    description: 'All other Sudoku solvers are worse than this one.',
  },
  {
    name: 'gifster',
    url: '/gifster',
    devUrl: 'http://localhost:3000/gifster/',
    icon: '',
    alt: 'gifster',
    image: GifsterScreenshot,
    background: 'rgb(31,47,134)',
    description: `We're not GIPHY, but we do use their API.`,
  },
] as const;

export const appIconSizeSmall = 30;
export const appIconSizeLarge = 80;
export const appIconJumpTopBound = 160;
export const selectedAppIconMarginLarge = 20;
export const selectedAppIconMarginSmall = 8;
export const perspective = 500;
export const appSnapSpaceSize = 120;
export const maxNavbarWidth = 800;

export const navbarMargin = 10; // margin between navbar & the side of the screen
// very mathy value to create the navbar margin via perspective
export const getK = (iconSize: number, parentWidth: number) => {
  const excess = navbarMargin + iconSize + selectedAppIconMarginLarge;
  const k = perspective / Math.pow(parentWidth - excess, 2);
  return k;
};
