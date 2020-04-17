import test from "ava";
import pipe from "../dist";

test("should pass args between functions", t => {
  const array = [arg => arg + 1, arg => arg + 1, arg => arg + 1];
  const piped = pipe(...array);

  t.is(piped(0), 3);
  t.is(piped(1), 4);
  t.is(piped(2), 5);
});

test("should pass different types of args between functions", t => {
  const array = [
    name => name === "John",
    result => (result ? 100 : 10),
    result => result > 50
  ];
  const piped = pipe(...array);

  t.is(piped("John"), true);
  t.is(piped("Jane"), false);
});

test("should return NHOJ", t => {
  const getName = data => data.name;
  const toUpperCase = str => str.toUpperCase();
  const reverse = str => str.split("").reverse().join("");

  const piped = pipe(getName, toUpperCase, reverse);

  t.is(piped({ name: "john" }), "NHOJ");
});
