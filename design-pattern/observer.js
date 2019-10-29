/*

Observer Pattern
Observer pattern promotes loose coupling.

It is a crucial behavioural design pattern that defines one-to-many dependencies between objects so that when one object (publisher) changes its state, all the other dependent objects (subscribers) are notified and updated automatically. This is also called PubSub (publisher/subscribers) or event dispatcher/listeners pattern. The publisher is sometimes called the subject, and the subscribers are sometimes called observers.
Chances are, you’re already somewhat familiar with this pattern if you have used addEventListener or jQuery’s .on to write even-handling code. It has its influences in Reactive Programming (think RxJS) as well.
In the example, we create a simple Subject class that has methods to add and remove objects of Observer class from subscriber collection. Also, a firemethod to propagate any changes in the Subject class object to the subscribed Observers. The Observer class, on the other hand, has its internal state and a method to update its internal state based on the change propagated from the Subject it has subscribed to.

*/

class Subject {
    constructor() {
      this._observers = [];
    }
  
    subscribe(observer) {
      this._observers.push(observer);
    }
  
    unsubscribe(observer) {
      this._observers = this._observers.filter(obs => observer !== obs);
    }
  
    fire(change) {
      this._observers.forEach(observer => {
        observer.update(change);
      });
    }
  }
  
  class Observer {
    constructor(state) {
      this.state = state;
      this.initialState = state;
    }
  
    update(change) {
      let state = this.state;
      switch (change) {
        case 'INC':
          this.state = ++state;
          break;
        case 'DEC':
          this.state = --state;
          break;
        default:
          this.state = this.initialState;
      }
    }
  }
  
  // usage
  const sub = new Subject();
  
  const obs1 = new Observer(1);
  const obs2 = new Observer(19);
  
  sub.subscribe(obs1);
  sub.subscribe(obs2);
  
  sub.fire('INC');
  
  console.log(obs1.state); // 2
  console.log(obs2.state); // 20