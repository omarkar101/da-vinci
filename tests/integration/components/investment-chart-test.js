import { module, test } from 'qunit';
import { setupRenderingTest } from 'da-vinci/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | investment-chart', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<InvestmentChart />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <InvestmentChart>
        template block text
      </InvestmentChart>
    `);

    assert.dom().hasText('template block text');
  });
});
