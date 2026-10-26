import { SITE, absoluteUrl } from '../config/site';

export function cityNodes(names: string[]) {
  return names.map((name) => ({
    '@type': 'City',
    name,
    containedInPlace: { '@type': 'State', name: 'South Dakota' },
  }));
}

export function serviceNode(name: string, serviceType: string, path: string, areas: string[]) {
  return {
    '@type': 'Service',
    name,
    serviceType,
    description:
      'Referral to a local licensed electrician. Sioux Falls Electricians does not perform electrical work.',
    url: absoluteUrl(path),
    provider: { '@id': `${SITE.origin}/#business` },
    areaServed: cityNodes(areas),
  };
}

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path === '/' ? SITE.origin : absoluteUrl(item.path),
    })),
  };
}
