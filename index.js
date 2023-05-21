// window.addEventListener("scroll", () => {
//     const scroll = window.scrollY;
//     const scrollable =
//       document.documentElement.scrollHeight - window.innerHeight;
//     const windowHeigt = (scroll / scrollable) * 100;
//     setScrolled(windowHeigt.toFixed(1));
//     // console.log("scrolled", scroll);
//     console.log("scrolled height", windowHeigt);
window.addEventListener("scroll",()=>{
    const scroll = window.scrollY;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scroll / scrollable) * 100;
    const fixScrolled = scrolled.toFixed(1);
    document.getElementById("progress").style.width = fixScrolled+"%"
})