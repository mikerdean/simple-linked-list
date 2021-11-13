import test from 'ava';
import { List, Element } from './index.js';

test('Element has constructor', (t) => {
    const element = new Element(1);
    t.is(element.value, 1);
});

test('Element value reflects constructor arg', (t) => {
    const element = new Element(2);
    t.is(element.value, 2);
});

test('Element has null for next by default', (t) => {
    const element = new Element(1);
    t.is(element.next, null);
});

test('List should have length 0 when initialized', (t) => {
    const list = new List();
    t.is(list.length, 0);
});

test('List can successfully add an element', (t) => {
    const list = new List();
    const element = new Element(1);
    t.notThrows(() => list.add(element));
});

test('List adding a single element increments length correctly', (t) => {
    const list = new List();
    list.add(1);
    t.is(list.length, 1);
});

test('List adding multiple elements increments length correctly', (t) => {
    const list = new List();
    list.add(1);
    list.add(2);
    t.is(list.length, 2);
});

test('List adding a single element sets head value correctly', (t) => {
    const list = new List();
    const value = 1;
    list.add(value);
    t.is(list.head.value, value);
});

test('List adding a multiple elements sets head value correctly', (t) => {
    const list = new List();
    const value1 = 1, value2 = 3;
    list.add(value1);
    list.add(value2);
    t.is(list.head.value, value2);
});

test('can get the next Element from the head', (t) => {
    const list = new List();
    const value1 = 1, value2 = 3;
    list.add(value1);
    list.add(value2);
    t.is(list.head.next.value, value1);
});

test('List can be initialized with an array', (t) => {
    const list = new List([1, 2, 3]);
    t.is(list.length, 3);
    t.is(list.head.value, 3);
});

test('List can be initialized with a Set', (t) => {
    const list = new List(new Set([1, 2, 3]));
    t.is(list.length, 3);
    t.is(list.head.value, 3);
});

test('List can output elements as an array', (t) => {
    const list = new List([1, 2, 3]);
    const arr = list.toArray();
    t.assert(Array.isArray(arr));
    t.is(arr[0], 3);
    t.is(arr[1], 2);
    t.is(arr[2], 1);
});

test('List can reverse elements', (t) => {
    const list = new List([1, 2, 3]).reverse();
    const arr = list.toArray();
    t.assert(Array.isArray(arr));
    t.is(arr[0], 1);
    t.is(arr[1], 2);
    t.is(arr[2], 3);
});

test('List can reverse elements multiple times', (t) => {
    const list = new List([1, 2, 3]).reverse().reverse();  
    const arr = list.toArray();
    t.assert(Array.isArray(arr));
    t.is(arr[0], 3);
    t.is(arr[1], 2);
    t.is(arr[2], 1);
});