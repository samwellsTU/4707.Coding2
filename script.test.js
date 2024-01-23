const MIDIengine = require("./script.js");

const testMIDI = new MIDIengine("MAudio", "PreSonus Interface")
const testMIDI2 = new MIDIengine("OP-1","MOTU")


describe('Coding 2 Test', () => {
  test('MIDIEngine constructor is the correct type', ()=>{
    expect(testMIDI).toBeInstanceOf(MIDIengine);
  })
  test('MIDIengine takes 2 parameters to make a new instance', ()=>{
    expect(MIDIengine.length).toBe(2);
  })
  test("MIDIengine has a property called 'input'", () => {
    expect(testMIDI).toHaveProperty("MIDIin");
  });
  test("MIDIengine has a property called 'output'", () => {
    expect(testMIDI).toHaveProperty("MIDIout");
  });
  test("MIDIengine has a property called 'running'", () => {
    expect(testMIDI).toHaveProperty("running");
  });
  test('.enable() method updates the property "running"', () => {
    const initState = testMIDI.running
    testMIDI.enable(!initState)
    expect(testMIDI.running).toBe(!initState);
  });
  test('You can make two different instances of MIDIengine', () => {
    expect(testMIDI).toBeInstanceOf(MIDIengine);
    expect(testMIDI2).toBeInstanceOf(MIDIengine);

    // Check if they are not the same instance
    expect(testMIDI).not.toBe(testMIDI2);
  });
  beforeEach(() => {
    // Spy on console.log before each test
    jest.spyOn(console, 'log');
  });

  afterEach(() => {
    // Restore console.log after each test
    console.log.mockRestore();
  });

  test('MIDI Engine enables correctly', () => {
    // Function that logs something


    // Call the function
    testMIDI.enable(true)

    // Check that console.log was called with the right message
    expect(testMIDI.running).toBe(true)
    expect(console.log).toHaveBeenCalledWith('The MIDI Engine is now on.');
  });
  test('MIDI Engine disables correctly', () => {



    // Call the function
    testMIDI.enable(false)

    // Check that console.log was called with the right message
    expect(testMIDI.running).toBe(false)
    expect(console.log).toHaveBeenCalledWith('The MIDI Engine is now off.');
  });
  test('.printInfo() displays the correct text', () => {
    // Function that logs something
    testMIDI.printInfo();
    expect(console.log).toHaveBeenCalledWith(`The MIDIEngine has an input of MAudio and an output of PreSonus Interface.`);
    testMIDI2.printInfo();
    expect(console.log).toHaveBeenCalledWith(`The MIDIEngine has an input of OP-1 and an output of MOTU.`);
  });


});


