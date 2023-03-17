document.body.addEventListener('keyup',(e)=>{
    
    PlaySound(e.code.toLowerCase())

})

document.querySelector('.composer button').addEventListener('click',()=>{
    let texto = document.querySelector('.composer input').value
    texto = texto.split('')
    let await=0;
    texto.forEach((e)=>{

        setTimeout(()=>{
            PlaySound(`key${e}`)
        },await);
        await+=250;
    })

})


function PlaySound(e){
        let element = document.querySelector(`#s_${e}`) 
        let keyelement = document.querySelector(`div[data-key="${e}"`)
        
        if(element){
            element.play()
        }
        if(keyelement){
            keyelement.classList.add('active')
            setTimeout(()=>{
                keyelement.classList.remove('active')
            },300)
        }
}