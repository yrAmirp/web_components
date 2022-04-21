import {CourseCard} from '../course-card/course-card.js';
import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('course-card', () => {
  test('is defined', () => {
    const el = document.createElement('course-card');
    assert.instanceOf(el, CourseCard);
  });

});s