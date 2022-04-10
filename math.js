const tambah = (a, b) => a + b;

const kurang = (a, b) => a - b;

const tambahAsync = (...args) => Promise.resolve(tambah(...args));

const kurangAsync = (...args) => Promise.resolve(kurang(...args));

module.exports = {
  tambah,
  kurang,
  tambahAsync,
  kurangAsync,
};
