export interface LinearList{ //การคอมพลายไม่ให้เกิด error เท่านั้น run ไม่เกิดผลลัพ export เพื่อใช้ในclssอื่น
    // size : Number //ประกาศตัวแปร data mem in class
    isEmpty : () => boolean //ชนิดข้อมูลในการ return กลับ
    sizeList : () => number
    getData : (index : number) => string | null //สามารถรีเทินเป็นข้อความหรือnull ก็ได้ ใช้ | เป็นตัวอนุญาติให้ประกาศเป็น null
    indexOf : (theElement : string) => number
    removeData : (index : number) => string | null
    addData : (index : number, theElement : string) => void //แทนกรณีที่ไม่มีการ return ผลลัพกลับไป
}