#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const parseStructure = (str) => {
  const stack = [];
  const root = {};
  let current = root;
  let i = 0;

  while (i < str.length) {
    if (str[i] === '[') {
      const parent = current;
      stack.push(current);
      current = {};
      parent[stack[stack.length - 1].name] = current;
      i++;
    } else if (str[i] === ']') {
      current = stack.pop();
      i++;
    } else if (str[i] === ',') {
      i++;
    } else {
      let j = i;
      while (j < str.length && !['[', ']', ','].includes(str[j])) j++;
      const item = str.slice(i, j).trim();
      if (item.includes('.')) {
        current[item] = '';
      } else {
        current[item] = {};
      }
      current.name = item;
      i = j;
    }
  }
  return root;
};

const createStructure = (basePath, structure) => {
  const visualTree = [];
  const buildTree = (currentPath, currentStructure, prefix = '') => {
    const entries = Object.entries(currentStructure);
    entries.forEach(([key, value], index) => {
      if (key === 'name') return;
      const isLast = index === entries.length - 1;
      const newPrefix = `${prefix}${isLast ? '└── ' : '├── '}`;
      visualTree.push(`${prefix}${newPrefix}${key}`);
      const nextPrefix = `${prefix}${isLast ? '    ' : '│   '}`;
      const newPath = path.join(currentPath, key);
      if (typeof value === 'object') {
        fs.mkdirSync(newPath);
        buildTree(newPath, value, nextPrefix);
      } else {
        fs.writeFileSync(newPath, value, 'utf-8');
      }
    });
  };

  buildTree(basePath, structure);
  return visualTree;
};

const start = () => {
  const input = process.argv[2];
  if (!input) {
    console.error('Please provide a structure definition');
    process.exit(1);
  }

  try {
    const structure = parseStructure(input);
    const visualTree = createStructure(process.cwd(), structure.root);
    console.log(visualTree.join('\n'));
  } catch (error) {
    console.error('Error creating folder structure:', error.message);
  }
};

start();
