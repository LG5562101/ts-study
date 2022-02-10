// class AnTest {
//   protected getPos () {
//     return {
//       x: 500,
//       y: 900
//     }
//   }
// }

// class Tank extends AnTest {
//   public move () {
//     // todo
//   }
// }

// class Player extends AnTest {
//   public move () {
//     // todo
//   }
// }

abstract class AnTest {
  abstract move(): void
  protected getPos () {
    return {
      x: 90,
      y: 100
    }
  }
}

class Player extends AnTest {
  move () {
    return '33333'
  }
  sayPos () {
    return `x:${this.getPos().x}`
  }
}

const m = new Player()
console.log(m.sayPos())