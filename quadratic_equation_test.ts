import { assertEquals } from "https://deno.land/std@0.203.0/testing/asserts.ts";
import { solve } from "./quadratic_equation.ts";

Deno.test("two distinct real roots (d>0)", () => {
	// x^2 - 3x + 2 = 0 -> roots 2 and 1
	const res = solve(1, -3, 2);
	assertEquals(res, [2, 1]);
});

Deno.test("one real root (d==0)", () => {
	// x^2 + 2x + 1 = 0 -> root -1 (double root)
	const res = solve(1, 2, 1);
	assertEquals(res, [-1]);
});

Deno.test("no real roots (d<0)", () => {
	// x^2 + 1 = 0 -> no real roots
	const res = solve(1, 0, 1);
	assertEquals(res, []);
});
