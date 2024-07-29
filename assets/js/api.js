async function fecthProfileData() {
  const url =
    "https://raw.githubusercontent.com/Claricez/Portf-lio-Trilha-JS-DIO/main/data/profile.json?token=GHSAT0AAAAAACVFNBII6A3PZK5KODNT6HLWZVIEOBA";
  const fetching = await fetch(url);
  return await fetching.json();
}
