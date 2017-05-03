# Pre lesson 1
1. [Introduction](#Introduction)
2. [Pre-Lesson Reading](#pre-reading)
3. [Pre-Lesson Exercises](#pre-exercises)

# Introduction
Welcome to Intro to Algorithms and Data Structures pre-lesson 1!, this will be a fun ride. Don’t worry if you dont understand all the theory or if you cannot complete all the exercises but its is extremely important that you DO read and try to finish the exercises.

There is a lot to do before lesson 1, but I promise next lectures will have less reading, but more exercises.

## So, what exactly is an Algorithm…
I’m gonna let smarter people than me answer that one, links for reading material will be at the bottom. But let me do a quick and informal introduction.

>An algorithm is just a step-by-step procedure for performing some task in a finite amount of time. Every program, routine or method you ever wrote (if it ever ended) is technically an algorithm.

## Example

If I tell you to write an algorithm that multiplies 2 positive integers, youll probably write something like…
```javascript
function multiply(a, b) {
 return a * b;
}
```

But you can also look back on what multiplication means, and say that a*b is the same as adding a, b times (a+a+a…. b times) [at least for positive integers]

```javascript
function multiply2(a, b) {
    var result = 0;
    for (i = 0; i < b; i++) {
        result += a;
    }
    return result;
}
```

Will analyze algorithms on lesson 2, so for now we’ll just say both algorithms are correct, meaning they actually return the multiplication of a and b.

## Great! But What the **** is a data structure…
Once again, I'll let smarter people tell you the formal definition. But for a quick a dirty hack lets just say..

> Simply put, a data structure is a way of organizing and accessing data. That's it, no magic there, just as you have made an algorithm for every problem you wanted to solve, you have already used data structures.

## Example

Arrays and objects are both really common javascript structures. Lets assume we need to handle a name and email address for a user in our system.

We could start with the horrible approach this time, and use the wrong data structure. Since we want to store 2 values (name and email) we could store them on a 2 element array like:


```javascript
let user = [“pablo”,”pabloDaBest@mail.com”];
```

But you can probably realize this approach could get ugly soon. We would need to remember the name and email positions (0 and 1), for every time we want to access them or we could accidentally add a third element into that array.

We know a better way to organize and access this data, creating an object with both properties could work, but thanks to the wonders of ECMAScript 2015 we could create a User class and a new instance per user we want to manipulate.

```javascript
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}
let pablo = new User("Pablo", "pabloDaBest@mail.com")
```

Just as Arrays and Objects, there is a lot of data structures, and its important to get to know them so you can use the right one for your problem.

Pre class reading will get you started on Stacks and Queues

# Pre-Lesson Readings <a name="pre-reading"></a>

1. [Algorithms and data structures](http://cs-fundamentals.com/data-structures/introduction-to-data-structures.php)
2. [Brushing up on arrays](http://www.bymichaellancaster.com/blog/javascript-data-structure-algorithms-series-ep2-arrays/)
3. [Stacks](https://drive.google.com/open?id=0B5KymQ29OlMANERwRmRZTTBObDQ)
4. [Queues](https://drive.google.com/open?id=0B5KymQ29OlMANFBPY1c2Y2E0R0U) (Ignore last stuff abut java implementation)



# Pre-Lesson Exercises <a name="pre-exercises"></a>

## tl;dr version
1. Clone this repo
2. open a terminal inside lesson 1 folder
3. npm install
4. npm test

If everything goes OK test will start and fail, you will have to make them pass.

## Long version

With your shiny new data structures knowledge lets do some exercises to get into the right mindset.
Inside lesson1 there is a src folder (where you'll have to work) and a spec folder (where tests live)


**Arrays**

arrayProblems.js is a class that contains some algorithms not fully implemented.
Your goal is to implement them correctly making all test pass.

* allEqualElements(array)
* getMax(array)
* getMax2(array)
* rotateLeft(array, n)

Description for what this methods should do is provided as comments in the code.

**Stacks and Queue**

stack.js / queue.js are classes that contain a non fully implemented stack/queue.
Your goal is to implement all the methods you read about in the pre class reading.

**Bonus Round: Stack Problem**

stackProblem.js requires you to have a fully functioning stack.js.
The goal of this algorithm is explained in the code comments.