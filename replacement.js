/*
 * This file contains the Map of word substitutions.
 */

/* exported dictionary */

let find = document.getElementById('find');
let replace = document.getElementById('replace');

let dictionary = new Map();
dictionary.set(find.value, replace.value);

