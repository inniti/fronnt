import { type ContentBlock, type Page } from '@fronnt/core';
import { nanoid } from 'nanoid';

const contentBlocks: ContentBlock[] = [
  {
    id: '1',
    blockType: 'text',
    data: {
      text: 'lorem ipsum dolor sit amet',
    },
    status: 'PUBLISHED',
    order: 1,
    locale: 'de-DE',
  },
];

const looseContentBlocks: ContentBlock[] = [
  {
    id: '2',
    blockType: 'maintenance',
    data: {
      text: 'Eine Wartungsmeldung',
    },
    status: 'PUBLISHED',
    locale: 'de-DE',
  },
];

const pages: Page[] = [
  {
    id: '1',
    title: 'fronnt Demo Store',
    url: '/',
    meta: {
      title: 'fronnt Demo Store',
      description: 'This is a demo store for @fronnt',
    },
    blocks: [contentBlocks[0]],
    childrenIds: [],
    template: 'home',
    createdAt: Date.now().toString(),
    updatedAt: Date.now().toString(),
    status: 'PUBLISHED',
    locale: 'de-DE',
    referenceId: null,
  },
  {
    id: '2',
    title: 'fronnt Demo Store – Marken',
    url: '/marken',
    meta: {
      title: 'fronnt Demo Store Marken',
      description: 'This is a demo store for @fronnt',
    },
    blocks: [],
    childrenIds: [],
    template: 'brands',
    createdAt: Date.now().toString(),
    updatedAt: Date.now().toString(),
    status: 'PUBLISHED',
    locale: 'de-DE',
    referenceId: null,
  },
  {
    id: '3',
    title: '@fronnt brikks Produkte online kaufen',
    url: '/marken/brikks',
    meta: {
      title: '@fronnt brikks Produkte online kaufen',
      description: 'This is a demo store for @fronnt',
    },
    blocks: [],
    childrenIds: [],
    template: 'brand',
    createdAt: Date.now().toString(),
    updatedAt: Date.now().toString(),
    status: 'PUBLISHED',
    locale: 'de-DE',
    referenceId: null,
  },
  {
    id: '4',
    title: '@fronnt Bausteine online kaufen',
    url: '/steine',
    meta: {
      title: '@fronnt Bausteine online kaufen',
      description: 'This is a demo store for @fronnt',
    },
    blocks: [],
    childrenIds: [],
    template: 'category',
    createdAt: Date.now().toString(),
    updatedAt: Date.now().toString(),
    status: 'PUBLISHED',
    locale: 'de-DE',
    referenceId: null,
  },
];

export { pages, contentBlocks, looseContentBlocks };
