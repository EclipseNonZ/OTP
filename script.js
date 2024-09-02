/*
let randomarray = ['Detox ซิมสำหรับคนรักสุขภาพ โทรนาทีแรก ขี้แตกในทันที', 'น้ำผึ้งตราหมีขอถือสมอบก เรื่องความสกปรกต้องยกให้เรา','ชุดเครื่องนอน โตเต้ เชื้อราเต็มผืน ฝ่าฝืนทุกความสะอาด', 'น้ำแร่ตรา Error ผลิตจากน้ำแร่ธรรมชาติ แต่สิ่งที่ขาดคือความปลอดภัย สิ่งที่เราใส่ใจ...ไม่มี', 'ยาสระผมตรา แผ่นดิน สระแล้วผมนุ่มมีน้ำหนัก สะบัดทีคอแทบหัก เพราะผมหนักเกินไป', 'ชุดนักเรียนตราแสม ใส่แสมเท่เสมอ ใส่เสมอเป็นลิงแสม', 'แปรงสีฟันตราเหล้กกล้า แปรงทีฟันสะอาด แต่มีเลือดสาดตามร่องเหงือก', 'น้ำยาล้างจานตรา Lion melon ถึงคุณจะไม่เห็นคราติดจาน แต่สิ่งที่คุณทานมีแต่สารเคมี', 'ยาน้ำสมุนไพรตรา หมอเซ็ง เรื่องอะไรจะไว้ใจหมอ', 'ยาหม่องตรา 3 เซียน ใช้ดมใช้ทาในหลอดเดียวกัน ใช้ต่อกันหลาย ๆ วันติดหวัดกันเอง', 'แป้งเด็กตรา โคโมโดดราก้อน เป็นมิตรกับเด็กนรก สกปรกเต้มกลืน ผดผื่นเต็มตัว', 'การแฟโบราณตรา เราชง เราชงพอกินได้ ชงให้ตายก็ไม่อร่อย', 'แผ่นยาแก้ปวดตรา สิงห์ 10 กว่าตัว สรรพคุณใช้เป็นยาบำรุงร่างกาย แปะใช้ง่าย ๆ จากหาย กลายเป็นหนักกว่าเดิม', 'กางเกงในตรา นายพราน ใส่ได้ไม่นาน เป้ายานถึงตาตุ่ม']

let randomButton = document.getElementById('Random')
let randomOutput = document.getElementById('RandomOut')
let randomStop   = document.getElementById('Stop')
let TimeOutId = 0

//let message = document.getElementsByClassName('message')
let message = document.querySelectorAll('.message')

randomButton.addEventListener('click', () => {
    TimeOutId = setInterval(() => {
        let n = randomarray.length;
        let index = Math.floor(Math.random()*n);
        let detail = randomarray[index];
        randomOutput.innerHTML = detail
    },1)
})

randomStop.addEventListener( 'click' , () => {
    clearInterval(TimeOutId)
})


message.forEach((messag) =>{
    messag.innerHTML = 'Hello'
})

let message2 = document.querySelector('#message2')

message2.innerHTML = 'SoSad'

let message = document.querySelector('.message')
message.style.color = 'red'
message.style.backgroundColor = 'black'

*/
/*
let spoil = document.querySelector('.spoil')
let message = document.querySelector('.message')
message.classList.add('green-box')

spoil.addEventListener('click' , ()=> {
    if(message.style.display == 'none'){
        message.style.display = 'block' 
        message.classList.remove('green-box')
    } else {
        message.style.display = 'none'
        
        message.classList.add('orange-box')
    }
})

let body = document.body
let theme = document.querySelector('.theme')
let message = document.querySelector('.message')

theme.addEventListener('click' , ()=>{
    body.classList.toggle('dark-theme')
})

let image = document.querySelectorAll('.thumnail-image')
let bigimage = document.querySelector('.big-image')

function changeimage(e){
    bigimage.src = e.target.src
}

function removeimage(){
    bigimage.src = ''
}

image.forEach((im) => {
    im.addEventListener('mouseout',removeimage)
    im.addEventListener('mouseover',changeimage)
});*/

/*
let imageIndex = 0;
let imageLink = ["https://stickershop.line-scdn.net/stickershop/v1/product/718/LINEStorePC/main.png?v=9","https://upload.wikimedia.org/wikipedia/th/b/be/Crayon_Shin-chan.jpg","https://f.ptcdn.info/630/042/000/o73u2y5o8J211DzaHsU-o.gif"]
let image = document.querySelector('.img')

function prevImage(){
    if(imageIndex> 0 ){
        imageIndex--;
        image.src = imageLink[imageIndex];
    }
}

function nextImage(){
    if(imageIndex < imageLink.length ){
        imageIndex++;
        image.src = imageLink[imageIndex];
    }
}

function changeImage(event){
    if(event.key === 'ArrowLeft'){
        prevImage()
    } else if(event.key === 'ArrowRight'){
        nextImage()
    }
}

document.addEventListener('keyup',changeImage)
 */
/*
let scrollinfo = document.querySelector(".popup");
let lastScrollY = 0

window.addEventListener("scroll", () => {
  let infoText = "X = " + window.scrollX;
  infoText += " Y = " + window.scrollY;
  if (window.scrollY > lastScrollY) {
    scrollinfo.classList.add('hide')
  }
  else{
    scrollinfo.classList.remove('hide')
  }
  lastScrollY = window.scrollY
  scrollinfo.innerHTML = infoText;
});






const weapons = document.querySelectorAll('.weapon')
const equipSlot = document.querySelector('.equip-slot')
const equipWeapon = document.querySelector('.equip-weapon')

function DragWeapon(event){
    event.dataTransfer.setData('text/plain',event.target.id)
    console.log(event.target.id)
}

weapons.forEach((weapon) => {
    weapon.addEventListener('dragstart' , DragWeapon)
})

function DragOverWeapon(event){
    event.preventDefault();
}

function DropWeapon(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData('text/plain')
    const image = document.querySelector('#' + id)
    equipWeapon.src = image.src
}

equipSlot.addEventListener('dragover',DragOverWeapon)
equipSlot.addEventListener('drop',DropWeapon)
*/

// TodoList

/*
const todo_input = document.querySelector(".todo-input")
const todo_button = document.querySelector(".todo-add")
const todo_list = document.querySelector(".todo-list")

function removeTodo(event){
    event.target.parentNode.remove();
}

function addTodo(){
    const todo = document.createElement('div') //Create Div
    todo.classList.add('todo') //It's innerHTML but cooler
    const h3 = document.createElement('h3') //Create h3
    h3.innerHTML = todo_input.value //Add h3 value
    const btn = document.createElement('button') //Create Button
    btn.type = 'button' //Set type of button
    btn.classList.add('remove-todo') //Add class remove
    btn.innerHTML = 'DELETE' //Add text
    btn.addEventListener('click',removeTodo) //Add event after click
    todo.append(h3,btn) //Show Last
    todo_list.prepend(todo) //Show First
}

todo_button.addEventListener('click' , addTodo)


 */

/*
const lyricBox = document.querySelector('.Lyric-box')

function lyricPromise(lyric){
    
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const lyricElement = document.createElement('h3')
            lyricElement.innerHTML = lyric;
            lyricBox.append(lyricElement);
            resolve();
         }, 3000);
    })

}

lyricPromise('นปโปะหม่ำๆ')
.then(()=>{
    return lyricPromise('หม่ำๆกู้ดบอย')
})
.then(()=>{
    return lyricPromise('กู้ดบอยหม่ำๆ')
})
.then(()=>{
    return lyricPromise('หม่ำๆเก่งมาก')
})
.then(()=>{
    return lyricPromise('เก่งมากๆ')
})



const avatarImg = document.querySelector('.avatar')
const fullnameText = document.querySelector('.fullname')
const emailText = document.querySelector('.email')


async function getUser() {
    try{
        const result = await fetch('https://reqres.in/api/users/10')
        const json = await result.json()
        const users = json.data;
        avatarImg.src = users.avatar;
        fullnameText.innerHTML = users.first_name + ' ' + users.last_name;
        emailText.innerHTML = users.email;
    }
    catch(error){
        console.log(error.message)
    }
}

getUser()


const image = document.getElementById('image')
const inputimage = document.getElementById('upload-file')

inputimage.addEventListener('change',(event)=>{
    image.src = URL.createObjectURL(event.target.files[0])
})

const ShowPass = document.getElementById('password-show')

function showPassword(){
    if(ShowPass.type === 'password'){
        ShowPass.type = 'text'
    }else{
        ShowPass.type = 'password'
    }
}

const print = document.getElementById('print')

print.addEventListener('click',()=>{
    window.print()
})

let alertShow = false

setInterval(()=>{
    document.title = alertShow ? "Welcome 2 NonZShop" : "Follow me more!";
    alertShow = !alertShow
},1000)


const colors = document.querySelector('.show-color')

function colorShow(color) {
    colors.style.background = color.value
}

const quiz = prompt('YOU SO COOL')
console.log(quiz)

const number = document.querySelector('.guage-label')
const rangeChange = document.getElementById('progress')

rangeChange.addEventListener('input',()=>{
    number.innerHTML = rangeChange.value
})*/

let btnGenerate = ()=>{
    const otplength = 6
    const otp = Math.floor(100000 + Math.random()*900000)
    document.getElementById('OTPDisplay').innerHTML = otp
}
document.getElementById('generateOTP')
.addEventListener('click',btnGenerate)


