const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const pick = require('lodash/pick');
const prettier = require('prettier');
const compiler = require('vue-template-compiler');
const Slots = require('./Slots');

const t = require('@babel/types');
const {parse} = require('@babel/parser');
const traverse = require('@babel/traverse');

function pickBindingsFromElement ({attribs}) {
  return pick(
    attribs,
    Object.keys(attribs)
      .filter(attr => attr.indexOf(':') === 0 || attr === 'v-bind'),
  );
}

/**
 * @param pathToComponent
 * @return {Object}
 */
function getAdditionalSlotProperties (pathToComponent) {
  const slots = new Slots();
  const file = fs.readFileSync(path.resolve(pathToComponent)).toString();
  const {template} = compiler.parseComponent(file);
  const $ = cheerio.load(template.content);

  $('slot').each(function (index, element) {
    const bindings = pickBindingsFromElement(element) || {};
    const slotName = element.attribs.name || 'default';
    const content = prettier.format($.html(element), {parser: 'html'});

    slots.add(slotName, {
      content,
      bindings,
    });
  });

  return slots.definitions;
}

module.exports = getAdditionalSlotProperties;
