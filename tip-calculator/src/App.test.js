import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

let labels;
let inputs;

labels = document.querySelectorAll('label');
inputs = document.querySelectorAll('label');

describe('Tip Calculator', () => {
  describe('labels', () => {
    const expected_labels = ['Total Bill', 'Tip Percentage', 'Number of People']

    it('should have the correct text content', () => {
      labels.forEach((label, i) => {
        expect(label.getByText).toEqual(expected_labels[i]);
      })
    })

  })
  describe('inputs', () => {

    it('are associated with correct inputs', () => {
      inputs.forEach((input, i) => {
        const associatedLabels = input.labels;
        expect(associatedLabels.length).toEqual(1)
        expect(associatedLabels[0].getByText).toEqual(expected_labels[i])
      })
    })
  })
})