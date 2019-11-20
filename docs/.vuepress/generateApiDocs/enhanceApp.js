import docs from '@dynamic/api.js';

export default ({Vue, options, router, siteData}) => {

  ['props', 'events', 'slots', 'methods'].map(section => {
    const page = siteData.pages.find(({path}) => path.includes(section));

    if( ! page.hasOwnProperty('title') ) {
      page.title = section.charAt(0).toUpperCase() + section.slice(1)
    }

    if (page && docs[section]) {
      if( ! page.hasOwnProperty('headers') ) {
        page.headers = [];
      }

      docs[section].forEach(({name}) => page.headers.push({
        level: 2,
        slug: name,
        title: name,
      }));
    }
  });
}
