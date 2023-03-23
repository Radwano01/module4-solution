let names = Array();
names[0] = "jakson";
names[1] = "maechel";
names[2] = "jafer";
names[3] = "jason";
names[4] = "akali";
names[5] = "faker";
names[6] = "yasuo";
names[7] = "jax";
names[8] = "ahmad";
names[9] = "mohammad";
names[10] = "radwan";

for (let i = 0; i <names.length; i++) {

    if (names[i].charAt(0) ==='J' || names[i].charAt(0) ==='j') {
        names[i] = names[i].charAt(0).toUpperCase() + names[i].slice(1);
        console.log(names[i])
    } else {
        names[i] = names[i].charAt(0).toUpperCase() + names[i].slice(1);
        console.log(names[i])
    }
}
