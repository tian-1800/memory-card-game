const imgData = (() => {
  const importAll = (r) => r.keys().map(r);
  const imported = importAll(
    require.context("../img/", false, /\.(png|jpe?g|svg)$/)
  );
  return imported.map((imgObj) => imgObj.default);
})();

export default imgData;
