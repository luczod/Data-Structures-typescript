import { StackArr } from './stack-array';
import { StackObj } from './stack-object';

console.log('stackClass');
const stack = new StackArr<number>();
stack.isEmpty();
stack.push(5);
stack.push(8);
stack.push(11);
stack.push(15);
stack.size();
stack.pop();
stack.pop();
stack.size();
console.log();

console.log('stackObj');
const stackObj = new StackObj<number>();
stackObj.push(5);
stackObj.push(8);
stackObj.push(9);
stackObj.size();
// stackObj.isEmpty();
stackObj.pop();
stackObj.toString();
