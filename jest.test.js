const { tambah, kurang, tambahAsync, kurangAsync } = require("./math");

test("Testing Fungsi Tambah", async () => {
  const result = await tambah(10, 5);

  const expected = 15;
  expect(result).toBe(expected);
});

test("Testing Fungsi Kurang", async () => {
  const result = await kurangAsync(10, 5);

  const expected = 5;

  expect(result).toBe(expected);
});
