async function fecthProfileData() {
  const url =
    "https://raw.githubusercontent.com/Claricez/Portf-lio-Trilha-JS-DIO/main/data/profile.json?token=GHSAT0AAAAAACVFNBIIPTZCFSY655VFQPG2ZVIEFWQ";
  const fetching = await fetch(url);
  return await fetching.json();
}
