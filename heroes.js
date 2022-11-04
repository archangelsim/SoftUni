function heroes(list) {
  let heroesList = [];
  list.forEach((line) => {
    let [name, level, items] = line.split(" / ");
    let currentHero = {
      name,
      level: Number(level),
      items,
    };

    heroesList.push(currentHero);
  });

  heroesList.sort((a, b) => a.level - b.level);

  heroesList.forEach((hero) => {
    console.log(
      `Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`
    );
  });
}

heroes([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
