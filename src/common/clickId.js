export default function clickEvent (target) {
    target.addEventListener('click', (e)=>{
        console.log(e.currentTarget.id);
        alert(e.currentTarget.id);
    })
}