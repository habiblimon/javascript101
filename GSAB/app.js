const tl = gsap.timeline({
    default:{duration: .75, ease: "Power3.easeOut"}
})


tl.fromTo(".hero-img", {scale:1.4, borderRadius: "2rem"},
{
    scale: 1,
    borderRadius: "1rem",
    delay:.25,
    duration:2.5,
    ease:"slow(0.7, 0.7, false)"
})

tl.fromTo(".cta1",{x: "100%",opacity: .5},{x:0, opacity:1},"<30%");
tl.fromTo(".cta2",{x: "100%",opacity: .5},{x:0, opacity:1},"<30%");
tl.fromTo(".cta3",{x: "-100%",opacity: .5},{x:0, opacity:1},"<30%");
tl.fromTo(".cta4",{x: "100%",opacity: .5},{x:0, opacity:1},"<30%");
tl.fromTo(".cta5",{x: "100%",opacity: .5},{x:0, opacity:1},"<30%");
tl.fromTo(".cta6",{x: "-100%",opacity: .5},{x:0, opacity:1},"<30%");

tl.fromTo(".btn",{y:20, opacity: 0},{y:0, opacity:1},"<30%");


const logo = document.querySelector(".logo");
const letter = logo.textContent.split("");
logo.textContent = "";

letter.forEach((letter)=>{
    logo.innerHTML += `<span class="letter">${letter}</span>`
});

console.log(letter);


gsap.set(".letter", {display: "inline-block"});
gsap.fromTo(".letter", {y:"100%"},{y:0, delay:1, stagger: .5, ease:"back.out"})
