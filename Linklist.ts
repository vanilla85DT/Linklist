import { LinearList } from "./LinearList"
class Nodedata{ //have two section is element and next
    element : string | null
    next : Nodedata | null //ชี้ไปโหนดต่อไป ไม่ก็ไม่มีคืือ null //กรณีdoubly linled
    // element1 : string | null// element2 : string | null
    // Lnext : Nodedata | nul // Rnext : Nodedata | nul
    constructor(elem : string | null = null, n : Nodedata | null = null){
    //เป็นการกำหนดตัวแปรเริ่มต้นภายใน class //มีพารามิเตอรื 2 ตัว มีค่าตามที่กำหนด กำหนดว่าถ้าไม่ใส่ให้มีค่าเป็น null แบบนี้คือ overlode เพราะ = คือค่าดีฟ้อล
        this.element = elem
        this.next = n
    }
}
class ChainNode implements LinearList {
    firstNode : Nodedata | null
    size : number 
    constructor(){ //มี datamem ต้องมีconstructor 
        this.firstNode = null
        this.size = 0
    }
    isEmpty() : boolean{
        if(this.size == 0)
            return true
        else 
            return false
    }
    sizeList() : number{
        return this.size
    }
    getData(index : number) : string | null{ //index ไว้เช็คใส่ค่าด้วย
        // let currentNode : Nodedata | null
        // currentNode = this.firstNode
        if(index >= 0 && index < this.size){
            let currentNode : Nodedata | null
            currentNode = this.firstNode
            for(let i = 0; i < index; i++){
                currentNode = currentNode!.next
            }
            return currentNode!.element
        }
        else
            return index + " = error can not find letters"
        
    }
    indexOf(theElement : string) : number{
        let currentNode : Nodedata | null
        currentNode = this.firstNode
        let index : number = 0
        //ไม่รู้จำนวนรอบในการวนลูปที่ไม่แน่นอน ใช้ while buz ถ้าจะใช้ for ต้องรู้จำนวนในการเดินทางแบบแน่นอน
        while(currentNode != null && currentNode.element != theElement) //เช็คว่าต้องไม่เท่ากับ null snd theelement
        {
            currentNode = currentNode.next //เนื่องจากมีการเช็คแล้วว่าไม่ใช่ null
            index++
        }
        if(currentNode == null) //ถ้าหาไม่เจอตามที่ในโหนดมีค่าจะส่งออก -1
            return -1
        else
            return index //เมื่อเจอแล้วค่าออกตามตำแหน่งของ
    }
    removeData(index : number) : string | null{ //หลักการเดียวกับ add
        if(index >= 0 && index < this.size){
            let beforeRemove : Nodedata | null
            let afterRemove : Nodedata | null
            beforeRemove = this.firstNode
            if(index == 0){
                afterRemove = this.firstNode
                this.firstNode = this.firstNode!.next
                this.size--
                return afterRemove!.element
            }
            else{
                for(let i = 0; i < index - 1; i++){
                    beforeRemove = beforeRemove!.next     
                }
                afterRemove = beforeRemove!.next
                beforeRemove!.next = beforeRemove!.next!.next //ลบตำแหน่งที่จะลบออกไป
                this.size-- //ขนาดลดลง
                return afterRemove!.element  //ส่งตัวที่ลบออกแสดง       
                }
            }
        else
            return index + " = error index out of bounds"
    }
    addData(index : number, theElement : string) : void{ 
        if(index == 0){
            this.firstNode = new Nodedata(theElement,this.firstNode) //สร้างNodeมาหนึ่งตัวมีค่าตามที่กำหนด
        } 
        else             
        {    
            let beforeNode : Nodedata | null //เริ่ม
            beforeNode = this.firstNode //สร้างbeforenode ชี้ไปที่firstnode
            for(let i = 0; i < index - 1; i++){
                beforeNode = beforeNode!.next //ถ่ายอมให้มีค่าเป็นnull 
                    //ใส่ ! คือยอมให้เป็นค่าnull แต่ไม่ยอมให้มันเป็นค่าอะไรก็ได้
                    //ส่วน? ยอมให้เป็นทุกอย่าง เป็นค่าเริ่มต้นที่กำหนดมาให้
            }
            beforeNode!.next = new Nodedata(theElement,beforeNode!.next) //ค่าข้อมูลตัวใหม่เชื่อมจากตัวก่อนหน้าเข้าตัวใหม่
                //สร้างโหนด เชือมตัวต่อและตัวก่อน แทนค่าลงในตัวก่อนคือ beforenode!.next
        }
        this.size++
    }
        
    display(){ // let currentNode : Nodedata | null //สร้างเพื่อเริ่มกำหนดให้เป็น firstnode // currentNode = this.firstNode
        for(let i = 0; i < this.size; i++){ 
            console.info(this.getData(i)) //เขียนแบบไหนก้ได้ สามารถนำ get มาใช้ได้เหมือนกัน
            // console.info(currentNode!.element)
            // currentNode = currentNode!.next
        }
    }
}
let myList : ChainNode = new ChainNode()

console.info(myList.isEmpty())

console.info("size of list = " + myList.sizeList())

console.info("----- Add data -----")
myList.addData(0,'a')
myList.addData(0,'b')
myList.addData(1,'c')
myList.addData(2,'d')
myList.addData(3,'e')
// myList.addData(4,'o')
// myList.addData(5,'x')
// myList.addData(0,'a')
// myList.addData(1,'b')
// myList.addData(2,'c')
// myList.addData(3,'d')
// myList.addData(4,'e')
myList.display()
console.info("size of list = " + myList.sizeList())

console.info("----- find data -----") 
console.info(myList.indexOf('c'))

console.info("----- Get data : find letter -----")
console.info(myList.getData(3))

console.info("----- remove data -----")
console.info("Data of remove = " + myList.removeData(0))
myList.display()
console.info("size of list = " + myList.sizeList())

console.info("----- Get data : find letter -----")
console.info(myList.getData(2))

// let myNode : Nodedata = new Nodedata()
// console.info(myNode.element)
// console.info(myNode.next)

// let myNode2 : Nodedata = new Nodedata('a')
// console.info(myNode2.element)
// console.info(myNode2.next)

// let myNode3 : Nodedata = new Nodedata('a',null) 
// console.info(myNode3.element)
// console.info(myNode3.next)

//ชื่อเหมือนกันแต่ใส่ค่าพารามิเตอตามจำนวนสูงสุดที่เรากำหนด เรียก overlode ของ constructor เดียว
//เขียนได้ 3 แบบ ด้านบน
//สามารถกำหนดค่าดีฟ้อลได้จากตรง constructor