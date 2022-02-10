// class User {
//   name: string
//   age: number
//   constructor (n: string, a : number) {
//     this.name = n
//     this.age = a
//   }
//   info (): string {
//     return `${this.name}的年龄${this.age}`
//   }
// }
// protected private
class User {
  protected name: string
  age: number
  constructor (n: string, a : number) {
    this.name = n
    this.age = a
  }
  info (): string {
    return `${this.name}的年龄${this.age}`
  }
}
class ChildUser extends User {
  constructor (name: string) {
    super(name, 90)
  }
  getName () {
    console.log(this.name)
  }
}
const x = new ChildUser('luoguan')
// x.info()
console.log(x.info())
// for (const key in x) {
//   if (x.hasOwnProperty(key)) {
//       console.log(key)
//   }
// }