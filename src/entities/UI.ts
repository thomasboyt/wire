import * as Coq from 'coquette';

import Game from '../Game';

import {width, height} from '../constants';

export default class UI implements Coq.Entity {
  game: Game;

  constructor(game: Game) {
    this.game = game;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const steps = this.game.blockManager.blocks.length;

    ctx.font = '24px Monaco, Consolas, monospace';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';

    ctx.fillText(`${steps}`, width / 2, height - 25);
  }
}
