import Component from 'ember-modal-dialog/components/basic-dialog';
import move from 'ember-animated/motions/move';
import { easeOut } from 'ember-animated/easings/cosine';
import { fadeIn, fadeOut} from 'ember-animated/motions/opacity';

export default Component.extend({
  * fadeAnimation({ insertedSprites, removedSprites, duration }) {
    yield;

    for (let sprite of insertedSprites) {
      fadeIn(sprite, { duration: duration })
    }

    for (let sprite of removedSprites) {
      fadeOut(sprite, { duration: duration * 2 })
    }
  },

  * moveAnimation({ insertedSprites, removedSprites, duration}) {
    yield;
    for (let sprite of insertedSprites) {
      sprite.startAtPixel({ y: sprite.originalFinalBounds.top + 50 });
      move(sprite, { easing: easeOut });
    }

    for (let sprite of removedSprites) {
      sprite.endAtPixel({ y: sprite.originalInitialBounds.top + 100 });
      move(sprite, { easing: easeOut });
      fadeOut(sprite, { duration: duration })
    }
  },

  useAnimation: true,
});
