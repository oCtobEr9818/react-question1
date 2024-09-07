/** Can you explain about Interface and Enum, and where will you be using,
please make some examples. **/

interface User {
  firstName: string;
  lastName: string;
  age: number;
  greet(): string; // 方法
}

// 實現 Interface 的類別
class Person implements User {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number
  ) {}

  greet(): string {
    return `我的名字叫做${this.firstName} ${this.lastName}，我今年${this.age}歲`;
  }
}

// 使用 Interface
const user: User = new Person("John", "Doe", 30);
console.log(user.greet());

/**
 * Enum 是一種用來定義一組命名常數的方式
 * 可以使程式碼更具可讀性，並且可以避免使用魔法字串。
 */
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

function move(direction: Direction) {
  switch (direction) {
    case Direction.Up:
      console.log("前進");
      break;
    case Direction.Down:
      console.log("後退");
      break;
    case Direction.Left:
      console.log("左轉");
      break;
    case Direction.Right:
      console.log("右轉");
      break;
  }
}

export {};
