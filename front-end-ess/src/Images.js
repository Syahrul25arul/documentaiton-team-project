function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}
const Logo = importAll(
  require.context("./assets/Logo", false, /\.(png|jpe?g|svg)$/)
);
export { Logo };

const Users = importAll(
  require.context("./assets/Users", false, /\.(png|jpe?g|svg)$/)
);
export { Users };
