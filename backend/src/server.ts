import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import randomRouter from '@repo/su-done-ku-backend/src/routes/random';
import { execSync } from 'child_process';

const app: Express = express();
const PORT: number = 3000;
// const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

// enable cors
app.use(cors());

// For webhook: parse JSON request bodies
app.use(express.json());

// For webhook: parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files
app.use(express.static('public'));

const rootDirectory = path.join(__dirname, '../../../..');

// webhook to trigger re-builds
app.post('/webhook', (req: Request, res: Response) => {
  if (req.body.event === 'push') {
    console.log('Received push event. Pulling new changes...');

    try {
      execSync('git pull', { cwd: rootDirectory });
      console.log('Changes pulled successfully.');

      console.log('Rebuilding affected projects...');
      console.log('Vercel token:', process.env.VERCEL_TOKEN);
      execSync(`pnpm dlx turbo build --token=${process.env.VERCEL_TOKEN} `, {
        cwd: rootDirectory,
      });
      console.log('Rebuild completed.');
    } catch (error) {
      console.error('Error occurred:', error);
    }
  }

  res.sendStatus(200);
});

// Serve pathfinder-visualizer
app.use(
  '/pathfinder-visualizer',
  express.static(path.join(rootDirectory, 'apps/pathfinder-visualizer/dist')),
);

// Serve minesweeper
app.use(
  '/minesweeper',
  express.static(path.join(rootDirectory, 'apps/minesweeper/dist')),
);

// Serve enlight
app.use(
  '/enlight',
  express.static(path.join(rootDirectory, 'apps/enlight/dist')),
);

// Serve matrix-cam
app.use(
  '/ascii-video',
  express.static(path.join(rootDirectory, 'apps/ascii-video/dist')),
);

// Serve dread-ui
app.use(
  '/dread-ui',
  express.static(path.join(rootDirectory, 'packages/dread-ui/dist')),
);

// Serve homepage
app.use(
  '/home',
  express.static(path.join(rootDirectory, 'apps/home-page/dist')),
);

// Serve steering-text
app.use(
  '/steering-text',
  express.static(path.join(rootDirectory, 'apps/steering-text/dist')),
);

// Serve shareme
app.use(
  '/shareme',
  express.static(path.join(rootDirectory, 'apps/shareme/frontend/dist')),
);

app.use('/su-done-ku/api/random', randomRouter);

// Serve su-done-ku
app.use(
  '/su-done-ku',
  express.static(path.join(rootDirectory, 'apps/su-done-ku/frontend/dist')),
);

// Serve gifster
app.use(
  '/gifster',
  express.static(path.join(rootDirectory, 'apps/gifster/dist')),
);

// Serve sketches
app.use(
  '/sketches',
  express.static(path.join(rootDirectory, 'apps/sketches/dist')),
);

// Serve fallcrate
app.use(
  '/fallcrate',
  express.static(path.join(rootDirectory, 'apps/fallcrate/dist')),
);

// Serve portfolio
app.use(
  '/',
  express.static(path.join(rootDirectory, 'apps/portfolio/frontend/dist')),
);

app.use('*', (req: Request, res: Response) => {
  // Send a 404 page
  res.status(404).send('App not found');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
