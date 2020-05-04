import { getModelValue } from './getModelValue';

const mock = {
  warehouse: {
    name: "CenterOfHerbs",
    warehouseProduct: {
      id: 104,
      barcode: "000104",
      count: 0,
      discountAmount: null,
      discountPercent: null,
      expirationDate: "2017-12-31",
      product: {
        id: 87,
        barcodes: ["5902741003454"],
        fullName: "Ogórecznik Ziele 50g Dary Natury.",
        labelSize: "17x54",
        name: "Ogórecznik",
        producer: "Dary Natury",
        type: "Ziele",
        vat: 23,
        weight: 50
      }
    }
  }
}

test('1 level - simple type', () => {
  const value = mock.warehouse.name;
  const foundValue = getModelValue(mock, 'warehouse.name')

  expect(foundValue).toBe(value);
});

test('2 level - simple type', () => {
  const value = mock.warehouse.warehouseProduct.count;
  const foundValue = getModelValue(mock, 'warehouse.warehouseProduct.count')

  expect(foundValue).toBe(value);
});

test('3 level - simple type', () => {
  const value = mock.warehouse.warehouseProduct.product.name;
  const foundValue = getModelValue(mock, 'warehouse.warehouseProduct.product.name')

  expect(foundValue).toBe(value);
});

test('4 level - Array', () => {
  const value = mock.warehouse.warehouseProduct.product.barcodes[0];
  const foundValue = getModelValue(mock, 'warehouse.warehouseProduct.product.barcodes')

  expect(foundValue[0]).toBe(value);
});

test('4 level - Object', () => {
  const value = mock.warehouse.warehouseProduct.product;
  const foundValue = getModelValue(mock, 'warehouse.warehouseProduct.product')

  expect(foundValue).toBe(value);
});