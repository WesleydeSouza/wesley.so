import { Apps } from '~/src/constants/Apps';

import { Instagram } from './Instagram/Instagram';
import { Modal } from './Modal/Modal';
import { Notepad } from './Notepad/Notepad';
import { Spotify } from './Spotify/Spotify';
import { Twitter } from './Twitter/Twitter';

export const ProgramFiles = {
  [Apps.instagram]: Instagram,
  [Apps.modal]: Modal,
  [Apps.notepad]: Notepad,
  [Apps.spotify]: Spotify,
  [Apps.twitter]: Twitter,
};
