import escape from "./images/escape.jpg";
import exposed from "./images/exposed.jpg";
import lastKingdom from "./images/last-kingdom.jpg";
import newMoon from "./images/new-moon.jpg";
import oath from "./images/oath.jpg";
import rampage from "./images/rampage.jpg";

export default function getGallery() {
    return [
        {
            id: "escape",
            name: "ESCAPE",
            cover: escape,
            details:  "Years after he fought his way out of an inescapable prison, Ray Breslin has organized a new top-notch security force. But when one of his team members goes missing, Breslin must return to the hell he once escaped from." },
        {
            id: "exposed",
            name: "EXPOSED",
            cover: exposed,
            details:  "A police detective investigates the truth behind his partner's death. The mysterious case reveals disturbing police corruption and a dangerous secret involving an unlikely young woman" },
        {
            id: "lastKingdom",
            name: "LAST KINGDOM",
            cover: lastKingdom,
            details:  "As Alfred the Great defends his kingdom from Norse invaders, Uhtred - born a Saxon but raised by Vikings - seeks to claim his ancestral birthright." },
        {
            id: "newMoon",
            name: "NEW MOON",
            cover: newMoon,
            details:  "Edward leaves Bella after an attack that nearly claimed her life, and in her depression she falls into yet another paranormal relationship - this time with werewolf Jacob Black." },
        {
            id: "oath",
            name: "OATH",
            cover: oath,
            details: "In a politically divided America, a man struggles to make it through the Thanksgiving holiday without destroying his family." },
        {
            id: "rampage",
            name: "RAMPAGE",
            cover: rampage,
            details:  "When three different animals become infected with a dangerous pathogen, a primatologist and a geneticist team up to stop them from destroying Chicago." }
    ];
}
