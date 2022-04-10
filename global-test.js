async function test(title, callback) {
  try {
    await callback();
    console.log(`SUKSES ${title}`);
  } catch (error) {
    console.error(`ERROR ${title}`);
    console.error(`ERROR ${error}`);
  }
}

function expect(actual) {
  return {
    toBe(expect) {
      if (actual !== expect) {
        throw new Error(`${actual} tidak sesuai dengan ${expect}`);
      }
    },
  };
}

global.test = test;
global.expect = expect;
