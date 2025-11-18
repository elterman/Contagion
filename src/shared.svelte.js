import { APP_KEY } from './const';
import { _sound } from './sound.svelte';
import { _stats, ss } from './state.svelte';

export const _log = (value) => console.log($state.snapshot(value));

export const onStart = () => {
    if (!_sound.musicPlayed) {
        _sound.playMusic();
    }

    _sound.play('dice');

    delete ss.over;
    delete ss.restart;
};

export const lost = () => (ss.over && ss.over !== 'won') ? ss.over : false;

export const showDialog = (value, plop = true) => {
    plop && _sound.play('plop');
    ss.dlg = value;
};

export const persist = () => {
    let json = { ..._sound, ..._stats };
    localStorage.setItem(APP_KEY, JSON.stringify(json));
};

export const loadGame = () => {
    const json = localStorage.getItem(APP_KEY);
    const job = JSON.parse(json);

    if (job) {
        _sound.sfx = job.sfx;
        _sound.music = job.music;
        _stats.plays = job.plays;
        _stats.won = job.won;
        _stats.total_points = job.total_points;
        _stats.best_points = job.best_points;
    } else {
        _stats.plays = 0;
        _stats.won = 0;
        _stats.total_points = 0;
        _stats.best_points = 0;
    }
};
