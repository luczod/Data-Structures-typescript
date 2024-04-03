import { CodeBlock } from './Code';
export function Section() {
  return (
    <section>
      <div className="container mx-auto bg-white p-2 shadow-xl">
        <h1 className="font-bold text-2xl mb-2">Array</h1>
        <h2 className="font-medium text-xl mb-2">Intention</h2>
        <p className="mb-2">
          In JavaScript, an array is a mutable object. We can easily add new elements to it. The
          object will dynamically grow as as new elements are added. In several other languages, for
          example, in C and Java, it is necessary to determine the size of the array and, if there
          is a need to add more elements, an entirely new array must be created; we cannot simply
          add new elements to the array as they are needed.
        </p>
        {/*   <pre
          data-src="src\Array\join.ts"
          className="language-typescript"
          data-src-status="loaded"
          tabIndex={0}
        >
          <code className="language-typescript"></code>
        </pre> */}
        <CodeBlock language="typescript">
          {`const zero = 0;
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];
const numbers = negativeNumbers.concat(zero, positiveNumbers);

console.log(numbers);
// output: [-3, -2, -1, 0, 1, 2, 3]`}
        </CodeBlock>
      </div>
    </section>
  );
}
