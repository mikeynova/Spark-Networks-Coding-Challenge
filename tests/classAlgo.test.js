const ClassAlgo = require('../client/helpers/classAlgo.js');

test('Good input!', () => {
  expect(ClassAlgo(`Introduction to Paper Airplanes:
								 		Advanced Throwing Techniques: Introduction to Paper Airplanes
								 		History of Cubicle Siege Engines: Rubber Band Catapults 101
								 		Advanced Office Warfare: History of Cubicle Siege Engines
								 		Rubber Band Catapults 101:
								 		Paper Jet Engines: Introduction to Paper Airplanes`))
  									.toBe('Introduction to Paper Airplanes, Advanced Throwing Techniques, Paper Jet Engines, Rubber Band Catapults 101, History of Cubicle Siege Engines, Advanced Office Warfare');
});

test('Bad input!', () => {
	expect(ClassAlgo(`Intro to Arguing on the Internet: Godwin’s Law
								 		Understanding Circular Logic: Intro to Arguing on the Internet
								 		Godwin’s Law: Understanding Circular Logic`))
										.toBe('Godwin’s Law, Intro to Arguing on the Internet, Understanding Circular Logic, Godwin’s Law');
})

test('Empty input!', () => {
	expect(ClassAlgo('')).toBe('Empty textbox');
})

test('White space ignored', () => {
	expect(ClassAlgo(`Introduction to Paper Airplanes:
								 		Advanced Throwing Techniques: Introduction to Paper Airplanes

								 		History of Cubicle Siege Engines: Rubber Band Catapults 101




								 		Advanced Office Warfare: History of Cubicle Siege Engines
								 		Rubber Band Catapults 101:
								 		Paper Jet Engines: Introduction to Paper Airplanes`))
										.toBe('Introduction to Paper Airplanes, Advanced Throwing Techniques, Paper Jet Engines, Rubber Band Catapults 101, History of Cubicle Siege Engines, Advanced Office Warfare')
})