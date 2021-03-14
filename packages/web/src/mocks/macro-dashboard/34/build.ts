import IMonthBuild from '@/interfaces/builds/IMacroDasboardDataBuilds';

import decemberBuild from './december/december-build';
import februaryBuild from './february/february-build';
import januaryBuild from './january/january-build';
import novemberBuild from './november/november-build';
import octoberBuild from './october/october-build';
import septemberBuild from './september/september-build';

export default {
  id: 'build34',
  build: 'Obra 34',
  months: [
    septemberBuild,
    octoberBuild,
    novemberBuild,
    decemberBuild,
    januaryBuild,
    februaryBuild,
  ],
} as IMonthBuild;
