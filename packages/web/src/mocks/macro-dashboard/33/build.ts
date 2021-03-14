import IMonthBuild from '@/interfaces/builds/IMacroDasboardDataBuilds';

import decemberBuild from './december/december-build';
import february2021Build from './february/february-build';
import january2021Build from './january/january-build';
import novemberBuild from './november/november-build';
import octoberBuild from './october/october-build';
import septemberBuild from './september/september-build';

export default {
  id: 'build33',
  build: 'Obra 33',
  months: [
    septemberBuild,
    octoberBuild,
    novemberBuild,
    decemberBuild,
    january2021Build,
    february2021Build,
  ],
} as IMonthBuild;
