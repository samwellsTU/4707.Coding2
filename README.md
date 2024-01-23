
# Coding 2 | MUST 4707

## JavaScript Class Creation: MIDIengine

In this assignment, you will develop a JavaScript class named `MIDIengine`. This class will represent a simple MIDI engine with input and output functionalities. Your task is to define the class in the `script.js` file and ensure it meets the specified requirements.

### Objectives
Define a new class prototype called `MIDIengine`

Your `MIDIengine` class should include:

1. **Constructor**:
   - The constructor should take two parameters:
        1. `input`
        2. `output`.
   - Initialize three properties:
        1. `MIDIin` (set to `input`)
        2. `MIDIout` (set to `output`)
        3. `running` (initially set to `false`).

2. **Methods**:
   1. `enable(on_off)`: A method to turn the MIDI engine on or off.
      - This method takes a boolean parameter `on_off`.
      - It sets the `this.running` property to the value of `on_off`.
      - It logs to the console a message indicating whether the MIDI Engine is on or off.
        - The message needs to say exactly `The MIDI Engine is now on.` When `this.running` is `true`.
        - or the message needs to say exactly `The MIDI Engine is now off.` When `this.running` is `false`.
        - This is a great place to combine template literals with the ternary operator.
          - `someTrueOrFalseValue ? resultIfTrue : resultIfFalse`
   2. `printInfo()`: A method to print information about the MIDI engine.
      - It logs the input and output of the MIDIEngine. The message needs to say exactly: 
      - `The MIDIEngine has an input of ` (whatever this.MIDIin is) `and an output of` (whatever this.MIDIout is)`.`
      - `The MIDIEngine has an input of Sensel Morph and an output of Digital Performer.`

3. **Module Export**: Do not remove the `module.exports = MIDIengine;` line at the end of your script. This is necessary for testing purposes. You don't need to worry about exporting your class in this instance.

### Testing Your Code

- GitHub test your implementation of the `MIDIengine` class.
- Ensure your class correctly initializes properties and that methods function as expected.
- there are 10 test that will be applied to your code:
`

1. `✓ MIDIEngine constructor is the correct type`
2. `✓ MIDIengine takes 2 parameters to make a new instance`
3. `✓ MIDIengine has a property called 'input'`
4. `✓ MIDIengine has a property called 'output'`\
5. `✓ MIDIengine has a property called 'running'`
6. `✓ .enable() method updates the property "running"`
7. `✓ You can make two different instances of MIDIengine`\
8. `✓ MIDI Engine enables correctly`
9. `✓ MIDI Engine disables correctly`
10. `✓ .printInfo() displays the correct text`



### Submission

- Update the `script.js` file with your implementation of the `MIDIengine` class.
- Commit and push your changes to your assignment repository on GitHub Classroom.
- Do not rename your file to anything different.

Good luck, and have fun with this exercise in creating custom JavaScript classes!
