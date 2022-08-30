import { Casino, LOCATION, NACIONALITY, User } from "../src/models/users";
import { verifyAge } from "../src/verifyAge";

test("1 brazilian allowed", () => {
    const brazilian: User = {
        name: "Astrodev",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
        name: "Balada Estelar",
        location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [brazilian]);
    expect(result.brazilians.allowed).toEqual(["Astrodev"]);
});

test("1 american allowed", () => {
    const brazilian: User = {
        name: "Astrodev",
        age: 19,
        nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
        name: "Balada Estelar",
        location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [brazilian]);
    expect(result.americans.allowed).toEqual(["Astrodev"]);
});