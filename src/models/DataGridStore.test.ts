import DataGridStore from './DataGridStore'
import RowModel from './RowModel';
import CellModel from './CellModel';

let headers: string[] = ["Symbol", "Bid LP", "Bid", "Ask LP", "Ask", "Spread"];

it("data grid model without rows is created", () => {
  let columnTypes: string[] = ["string", "JSX.Component", "number", "JSX.Component", "number", "number"];

  let store = new DataGridStore(headers, columnTypes);

  console.log(store.Headers);

  expect(store.Headers).toBe(headers);
  expect(store.ColumnTypes).toBe(columnTypes);
});

it("data grid model with not the same amount of data type cells and header cells is not created", () => {
  let headers: string[] = ["Symbol", "Bid LP", "Bid", "Ask LP", "Ask", "Spread"];
  let columnTypes: string[] = ["JSX.Component", "number", "JSX.Component", "number", "number"];  
  
  expect(()=> { new DataGridStore(headers, columnTypes); })
    .toThrowError();
});

it("data grid model with data is created", () => {
  let columnTypes: any[] = ["string", "string", "number", "string", "number", "number"];
  let data = [
    ["AUDCAD", "span", 0.99206, "span", 0.99207, 0.1],
    ["AUDCHF", "span", 0.91370, "span", 0.91371, 0.1],
    ["AUDJPY", "span", 96.212, "span", 96.215, 0.3],
    ["AUDUSD", "span", 0.96741, "span", 0.96744, 0.3],
    ["CADCHF", "span", 0.92070, "span", 0.92071, 0.1],
    ["CADJPY", "span", 96.827, "span", 96.828, 0.1],
    ["CHFJPY", "span", 105.112, "span", 105.115, 0.3],
    ["EURAUD", "span", 1.35699, "span", 1.35702, 0.3],
    ["EURCAD", "span", 1.34721, "span", 1.34722, 0.1],
    ["EURCHF", "span", 1.24024, "span", 1.24025, 0.1],
  ];

  let store = new DataGridStore(headers, columnTypes, data);
  let row: RowModel = store.Rows[0];
  let cell: CellModel = row.Cells[0];

  expect(store.Rows.length).toBe(data.length);
  expect(row.Cells.length).toBe(data[0].length);

  expect(cell.Value).toBe(data[0][0]);
});


