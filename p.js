
// sidebar

const menuItem = document.querySelectorAll('.menu-item');
//message

const messagesNotification = documtent.querySelector('#messagse-notification');
const messages = document.querySelector('.messages');
//theme
const theme = document.querySelector('#theme');
const themeModel =document.querySelector('.customize-theme');
//fontsize
const fontSize =document.querySelectorAll('.choose-size');
var root =document.querySelector(':root');

//**************Sidebar**************
 const changeActiveItem = () => {
    menuItem.forEach(item => {
        item.classList.remove('active');
    })
 }
 menuItem.forEach(item => {
    item.addEventListener('click',() =>{
        changeActiveItem();
        item.classList.add('active');
    })
 })
 //**************message**************
 messagesNotification.addEventListener('click',() =>{
       messages.style.boxShadow = '0 0 1rem var(--color-primary)';
       setTimeout(() => {
        messages.style.boxShadow ='none';
       },2000);
 })
 //--------------theme--------
 //open model
const openThemeModel = () => {
    themeModel.style.display = 'grid';
}
//close model
const closeThemeModel = (e) =>{
    if(e.target.classList.contains('customize-theme')){
        themeModel.style.display = 'none';
    }
}
 themeModel.addEventListener('click',closeThemeModel);
 theme.addEventListener('click',openThemeModel);

 //fontsize
 //remove  active class fon size
const removeSizeSelector = () =>{
    fontSize.forEach(size =>{
        size.classList.remove('active');
    })
}
// fontsize desin
 fontSize.forEach(size =>{
    let fontSize;
    size.classList.toggle('active');
    size.addEventListener('click',()=>{
        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
           root.style.setProperty('--sticky-top-left:' ,'5.4rem');
           root.style.setProperty('--sticky-top-right:' ,'-18rem');
        }
         else if(size.classList.contain('font-size-2')){
            fontSize =  '12px';
            root.style.setProperty('--sticky-top-left:' ,'5.4rem');
           root.style.setProperty('--sticky-top-right:' ,'-20rem');
        }
        else if(size.classList.contain('font-size-3')){
            fontSize =  '14px';
            root.style.setProperty('--sticky-top-left:' ,'-1rem');
           root.style.setProperty('--sticky-top-right:' ,'-22rem');
        }
        else if(size.classList.contain('font-size-4')){
            fontSize =  '16px';
            root.style.setProperty('--sticky-top-left:' ,'-3rem');
           root.style.setProperty('--sticky-top-right:' ,'-24rem');
        }
        else if(size.classList.contain('font-size-5')){
            fontSize =  '18px';
            root.style.setProperty('--sticky-top-left:' ,'-5.4rem');
           root.style.setProperty('--sticky-top-right:' ,'-28rem');
        }
        document.querySelector('html').style.fontSize = fontSize;
    })
   
 })